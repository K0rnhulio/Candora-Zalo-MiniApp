export enum ScentsType {
  PERFUME = 'Main Scents',
  CANDLE = 'Supportive Notes'
}

export interface Scent {
  number: string;
  code: string;
  name: string;
  category: string;
  mood: string;
  notes: string;
  type: ScentsType;
  description?: string;
  gender?: string;
  similarTo?: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface BlendComponent {
  number: string;
  code: string;
  name: string;
  percentage: number;
  type: ScentsType;
  reason: string;
  similarTo?: string;
}

export interface BlendResult {
  blendName: string;
  description: string;
  components: BlendComponent[];
  reasoning: string;
}

export interface UserInfo {
  name: string;
  phone: string;
}

export type UserAnswers = Record<number, string>;

export type Language = 'en' | 'vi' | 'ru';

export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  CONTACT_FORM = 'CONTACT_FORM',
  RESULT = 'RESULT'
}
