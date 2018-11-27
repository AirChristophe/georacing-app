import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { Localization } from 'expo-localization';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => { callback(locale); }) },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        menu: {
            home:   'Home',
            news:   'News',
            media:  'Media',
            events: 'Events',
            setting: 'Setting'
        },   
        common: {
            currentLanguage: 'The current language is "{{lng}}"',
            actions: {
              toggleToFrench: 'French',
              toggleToEnglish: 'English',
              goToPage2: 'Open page 2'
            },
        }    

      },
      fr: {
        menu: {
            home:   'Home',
            news:   'Actualités',
            media:  'Media',
            events: 'Evènements',
            setting: 'Paramètres'
        },
        common: {
            currentLanguage: 'La langue courante est "{{lng}}"',
            actions: {
              toggleToFrench: 'Français',
              toggleToEnglish: 'Anglais',
              goToPage2: 'Open page 2'
            },
        }  
      }
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });


export default i18n;