import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {pixelToHpPercent, pixelToWpPercent} from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: pixelToHpPercent(40),
    justifyContent: 'center',
    marginBottom: 5,
  },
  image: {
    opacity: 0.8,
    width: pixelToWpPercent(16),
    height: pixelToHpPercent(16),
    marginLeft: pixelToWpPercent(10),
    position: 'absolute',
  },
  textInput: {
    opacity: 0.8,
    color: Colors.white,
    fontSize: Fonts.size.large,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: pixelToWpPercent(35),
    width: '98%',
  },
});
