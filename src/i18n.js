import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTrans from './languages/en.json'
import ArTrans from './languages/ar.json'
import cookie from 'js-cookie'

//* initial cookie
function setLanguage(){
    if (!cookie.get('language')) {
        cookie.set('language','en')
    }
    return cookie.get('language')
}

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation:EnTrans
  },
  ar:{
    translation:ArTrans
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: setLanguage(),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;