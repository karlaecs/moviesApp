import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import {Link} from 'react-router-native';
import _ from 'lodash/fp';

import {strings} from '../../utils';

import styles from './styles';

const items = [
  {id: 'theatres', title: 'Theatres', to: '/movies/theatres'},
  {id: 'popular', title: 'Popular', to: '/movies/popular'},
  {id: 'theatres', title: 'Top Rated', to: '/movies/top_rated'},
];

const Menu = ({match}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{strings.theatres}</Text>
    <Text style={styles.title2}>{strings.movies}</Text>

    {/* Todo Menu with more types movies */}
    {/* {_.map(item => (
      <TouchableOpacity style={styles.menuItem}>
        <Link to={`${match.url}/${item.to}`}>
          <Text
            style={[
              styles.text,
              _.isEqual(match.url, item.to) && styles.underlineMenu,
            ]}>
            {item.title}
          </Text>
        </Link>
      </TouchableOpacity>
    ))(items)} */}
  </View>
);

Menu.propTypes = {
  match: PropTypes.object.isRequired,
};

Menu.defaultProps = {};

export default Menu;
