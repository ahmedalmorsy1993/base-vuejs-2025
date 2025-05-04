import { watch } from "vue";
import { createI18n } from "vue-i18n";
import ar from './ar.json';
import en from "./en.json";
const savedLanguage = localStorage.getItem('lang') || 'ar';
export const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLanguage,
  fallbackLocale: "ar",
  messages: {
    en,
    ar
  },
});

// Set document direction based on locale
(function () {
  const setDir = () => {
    // Get current locale
    const currentLocale = i18n.global.locale.value;

    // Set direction based on locale
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLocale;
  }

  // Watch for locale changes
  watch(() => i18n.global.locale.value, () => {
    setDir();
  });

  // Set initial direction
  setDir();
})();
