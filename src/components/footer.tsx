import { useLanguage } from "@/hooks";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-4 text-center text-gray-400 text-xs tracking-widest uppercase border-t border-gray-100 bg-white">
      &copy; {new Date().getFullYear()} {t.footer}
    </footer>
  );
}
