type Props = { lang?: "ar" | "en" };

export default function LanguageSwitcher({ lang = "ar" }: Props) {
  return (
    <div className="flex items-center gap-2">
      <a
        href="/"
        className={`font-semibold ${lang === "ar" ? "text-[#00CFC5]" : "text-gray-700 hover:text-[#00CFC5]"}`}
        aria-current={lang === "ar" ? "true" : undefined}
      >
        AR
      </a>
      <span className="text-gray-400">/</span>
      <a
        href="/en"
        className={`font-semibold ${lang === "en" ? "text-[#00CFC5]" : "text-gray-700 hover:text-[#00CFC5]"}`}
        aria-current={lang === "en" ? "true" : undefined}
      >
        EN
      </a>
    </div>
  );
}