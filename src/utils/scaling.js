import {Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

/**  Define size proportional to the screen height */
const pixelToHpPercent = px => {
  const calc = ((px / longDimension) * 100).toFixed(2);
  const percent = `${calc}%`;
  return hp(percent);
};

/**  Define size proportional to the screen width */
const pixelToWpPercent = px => {
  const calc = ((px / shortDimension) * 100).toFixed(2);
  const percent = `${calc}%`;
  return wp(percent);
};

export {pixelToHpPercent, pixelToWpPercent};
