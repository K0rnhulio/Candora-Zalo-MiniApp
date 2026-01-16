import { useState } from "react";
import { useLanguage, useQuiz } from "@/hooks";
import { UserInfo } from "@/types";

export default function ContactPage() {
  const { t } = useLanguage();
  const { handleContactSubmit } = useQuiz();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(t.contactForm.error);
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Small delay for UX
    setTimeout(async () => {
      await handleContactSubmit({ name, phone });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="w-full px-4 py-6 animate-fade-in-up">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gold-100 text-black rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-serif text-black mb-3">{t.contactForm.title}</h2>
          <p className="text-gray-600 font-light text-sm">
            {t.contactForm.description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl border border-gold-100 relative rounded-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gold-500 to-black"></div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-800 text-sm border-l-4 border-red-500 rounded">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">
                {t.contactForm.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black text-base focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-300 font-serif"
                placeholder={t.contactForm.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">
                {t.contactForm.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black text-base focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-300 font-serif"
                placeholder={t.contactForm.phonePlaceholder}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-black text-white py-4 px-6 hover:bg-gray-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group rounded-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                {t.contactForm.submitting}
              </span>
            ) : (
              <span className="uppercase tracking-[0.15em] font-bold text-sm flex items-center justify-center gap-2">
                {t.contactForm.submitButton}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            {t.contactForm.privacy}
          </p>
        </form>
      </div>
    </div>
  );
}
