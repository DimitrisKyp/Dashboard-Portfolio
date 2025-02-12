import en from "../translations/en.json";
import gr from "../translations/gr.json";

// Define the type for the translations
type TranslationData = Record<string, Record<string, string>>;

// Define available translations
const translations: Record<string, TranslationData> = {
  en,
  gr,
};

// Cache for storing selected language translations
const cache: Record<string, TranslationData> = {};

// Function to get a translation
export const getTranslation = (
  pageKey: string,
  wordKey: string,
  language: string
): string => {
  if (!cache[language]) {
    cache[language] = translations[language] || translations.en;
  }

  const translation = cache[language];
  return translation[pageKey]?.[wordKey] || wordKey;
};
