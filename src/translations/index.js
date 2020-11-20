import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import en from './en';
import vi from './vi';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales) && locales.length > 0) {
  i18n.locale = locales[0].languageTag;
}

i18n.translations = {en, vi};
i18n.defaultLocale = 'vi';
i18n.fallbacks = true;

export const LocalizationContext = React.createContext();

export default LocalizationProvider = (props) => {
  const [locale, setLocale] = React.useState(i18n.locale);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );
  return (
    <LocalizationContext.Provider value={localizationContext}>
      {props.children}
    </LocalizationContext.Provider>
  );
};
