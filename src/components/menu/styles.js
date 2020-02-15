import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    marginLeft: 3,
    marginBottom: 5,
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.size.h6,
    fontWeight: 'bold',
  },
  title2: {
    opacity: 0.6,
    marginLeft: 5,
    color: Colors.white,
    fontSize: Fonts.size.h6,
  },
  menuItem: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
  },
  underlineMenu: {
    borderBottomColor: Colors.neonBlue,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  text: {
    color: Colors.white,
    fontWeight: '400',
  },
});
