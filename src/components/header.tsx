import { useLanguage } from "@/hooks";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="py-3 px-4 flex justify-between items-center border-b border-gray-100 bg-[#FCFCFC]">
      {/* Language Selector */}
      <div className="flex items-center gap-1 ">
        <button
          onClick={() => setLanguage("en")}
          className={`text-xs uppercase tracking-wider px-1 py-1 transition-colors ${
            language === "en" ? "text-gold-500 font-bold" : "text-gray-400"
          }`}
        >
          EN
        </button>
        <span className="text-gray-300 text-xs">|</span>
        <button
          onClick={() => setLanguage("vi")}
          className={`text-xs uppercase tracking-wider px-1 py-1 transition-colors ${
            language === "vi" ? "text-gold-500 font-bold" : "text-gray-400"
          }`}
        >
          VI
        </button>
        <span className="text-gray-300 text-xs">|</span>
        <button
          onClick={() => setLanguage("ru")}
          className={`text-xs uppercase tracking-wider px-1 py-1 transition-colors ${
            language === "ru" ? "text-gold-500 font-bold" : "text-gray-400"
          }`}
        >
          RU
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://candora.b-cdn.net/CandoraLogo.svg"
          alt="Candora Logo"
          className="h-7 w-auto"
        />
      </div>

      {/* Empty space for balance */}
      <div className="w-20"></div>
    </header>
  );
}
