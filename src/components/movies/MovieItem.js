import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';

import styles from './styles';

const MovieItem = ({item, match}) => (
  <Link to={`${match.url}/${item.id}`}>
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Text style={{color: '#fff'}}>Image</Text>
      </View>
      <View style={styles.legend}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.subtitle}>2019 - Adventure</Text>
      </View>
    </TouchableOpacity>
  </Link>
);

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
};

MovieItem.defaultProps = {
  item: {},
};

export default MovieItem;
