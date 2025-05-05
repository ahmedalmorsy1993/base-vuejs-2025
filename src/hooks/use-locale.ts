import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
export type TSide = "right" | "left";

export const useLocale = () => {
  const { locale } = useI18n();
const route = useRoute()
  // Computed properties that will update when locale changes
  const lang = computed(() => locale.value);
  const dir = computed(() => lang.value === "ar" ? "rtl" : "ltr");
  const side = computed<TSide>(() => dir.value === "rtl" ? "right" : "left");
  const transitionKey = computed(() => `${route.fullPath}-${lang.value}`)
  const setLocaleStorage = (lang: string) => {
    localStorage.setItem("lang", lang);
  };

  const changeLang = () => {
    const newLanguage = lang.value === "ar" ? "en" : "ar";
    setLocaleStorage(newLanguage);
    locale.value = newLanguage;
  };

  return { lang, dir, side, changeLang, transitionKey };
};
