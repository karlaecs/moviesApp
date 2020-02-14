import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {Scaling} from '../../utils';

const {pixelToHpPercent, pixelToWpPercent} = Scaling;

export default StyleSheet.create({
  // Item
  container: {
    // backgroundColor: 'red',
    width: pixelToWpPercent(100),
    height: pixelToHpPercent(160),
    marginRight: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  containerEmptyList: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '80%',
    backgroundColor: Colors.navyBlue,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: 3,
    // justifyContent: 'space-around',
  },
  separator: {},
  header: {},
  footer: {
    marginBottom: pixelToHpPercent(150),
  },
});
