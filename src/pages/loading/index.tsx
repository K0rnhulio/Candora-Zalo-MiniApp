import { useLanguage } from "@/hooks";

export default function LoadingPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-12 animate-pulse">
      <div className="w-16 h-16 border-4 border-gold-100 border-t-gold-500 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-serif text-black mb-2 text-center">{t.loading.title}</h2>
      <p className="text-gray-500 font-light text-center">{t.loading.subtitle}</p>
    </div>
  );
}
