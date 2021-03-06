import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {pixelToHpPercent, pixelToWpPercent} from '../../utils';

export default StyleSheet.create({
  // Item
  container: {
    width: pixelToWpPercent(100),
    height: pixelToHpPercent(160),
    marginRight: 10,
    marginVertical: 5,
  },
  containerEmptyList: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '80%',
    borderColor: Colors.dimGray,
    borderWidth: 1,
    // backgroundColor: Colors.navyBlue,
  },
  image: {
    height: '100%',
    // width: pixelToWpPercent(100),
    // height: pixelToHpPercent(160),
  },
  legend: {
    marginTop: 5,
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  subtitle: {
    opacity: 0.7,
    color: Colors.white,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
  },

  // Item Details
  containerItemDetails: {
    height: '100%',
  },

  // List
  containerList: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: 3,
    marginTop: 5,
  },
  separator: {},
  header: {},
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: pixelToHpPercent(50),
  },
});
