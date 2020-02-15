import I18n from 'react-native-i18n';

import en from '../assets/i18n/en';
import pt from '../assets/i18n/pt';

let languageCode = I18n.locale.substr(0, 2);
let strings;

switch (languageCode) {
  case 'en':
    strings = en;
    break;
  default:
    strings = en;
}

export default strings;
