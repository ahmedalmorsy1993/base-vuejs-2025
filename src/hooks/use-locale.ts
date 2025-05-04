import { useI18n } from "vue-i18n";

export type TSide = "right" | "left";



export const useLocale = () => {
  const { locale } = useI18n();
  const lang = locale.value;
  const dir = 'rtl'
  const side: TSide = dir === "rtl" ? "right" : "left";

  const setLocaleStorage = (lang: string) => {
    localStorage.setItem("lang", lang);
  };
  const changeLang = () => {
    const newLanguage = lang === "ar" ? "en" : "ar";
    setLocaleStorage(newLanguage);
    // changeLanguage(newLanguage);
  };

  return { lang, dir, side, changeLang };
};
