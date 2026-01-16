import { BlendResult, UserInfo, UserAnswers } from '../types';
import { getSupabase } from './supabaseClient';
import { setStorage, getStorage } from 'zmp-sdk';

// Zalo notification placeholder - will be implemented via Supabase Edge Function
const sendZaloNotification = async (
  userInfo: UserInfo,
  result: BlendResult,
  formulaSummary: string
): Promise<void> => {
  // TODO: Implement via Supabase Edge Function or external webhook
  console.log('Zalo notification queued for:', userInfo.name, userInfo.phone);
  console.log('Blend:', result.blendName, '| Formula:', formulaSummary);
};

// Helper function to save to Zalo storage
const saveToZaloStorage = async (record: object): Promise<void> => {
  try {
    const existingData = await getStorage({ keys: ['scent_alchemist_db'] });
    const db = existingData?.scent_alchemist_db
      ? JSON.parse(existingData.scent_alchemist_db as string)
      : [];
    db.push(record);
    await setStorage({
      data: {
        scent_alchemist_db: JSON.stringify(db)
      }
    });
  } catch (error) {
    // Fallback to localStorage if Zalo storage fails
    console.warn('Zalo storage failed, using localStorage:', error);
    const existingData = localStorage.getItem('scent_alchemist_db');
    const db = existingData ? JSON.parse(existingData) : [];
    db.push(record);
    localStorage.setItem('scent_alchemist_db', JSON.stringify(db));
  }
};

export const saveToDatabase = async (
  userInfo: UserInfo,
  answers: UserAnswers,
  result: BlendResult
): Promise<boolean> => {
  try {
    const supabase = getSupabase();

    const formulaSummary = result.components
      .map(c => `#${c.number} ${c.code}: ${c.percentage}%`)
      .join(' | ');

    if (!supabase) {
      console.warn('Supabase not configured, saving to Zalo storage instead');
      const record = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        user: userInfo,
        quizAnswers: answers,
        generatedBlend: result
      };
      await saveToZaloStorage(record);
      console.log("Record saved to Zalo storage:", record);

      // Try to send Zalo notification even without Supabase
      sendZaloNotification(userInfo, result, formulaSummary);
      return true;
    }

    const { data, error } = await supabase
      .from('scent_orders')
      .insert({
        name: userInfo.name,
        phone: userInfo.phone,
        quiz_answers: answers,
        blend_name: result.blendName,
        blend_description: result.description,
        blend_components: result.components,
        blend_reasoning: result.reasoning,
        formula_summary: formulaSummary,
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error("Supabase error:", error);
      return false;
    }

    console.log("Record saved to Supabase:", data);

    // Send Zalo notification after successful save
    sendZaloNotification(userInfo, result, formulaSummary);

    return true;
  } catch (error) {
    console.error("Database save failed:", error);
    return false;
  }
};
