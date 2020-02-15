import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.size.small,
    opacity: 0.5,
  },
});
