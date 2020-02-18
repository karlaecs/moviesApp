import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Link} from 'react-router-native';
import {getBaseUrlImage} from '../../api';

import styles from './styles';

const MovieItem = ({item, match}) => (
  <>
    <Link to={`${match.url}/${item.id}`}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: `${getBaseUrlImage}${item.poster_path}`}}
          />
        </View>
        <View style={styles.legend}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.subtitle}>
            {item.year} - {item.genre}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  </>
);

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

MovieItem.defaultProps = {
  item: {},
};

export default MovieItem;
