import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, ActivityIndicator} from 'react-native';

import {Colors} from '../../themes';

import {strings} from '../../utils';

import styles from './styles';

const EmptyList = ({image, message, loading}) => (
  <View style={[styles.container]}>
    {loading ? (
      <View style={styles.loading}>
        <ActivityIndicator color={Colors.white} />
      </View>
    ) : (
      <View>
        <Image
          resizeMode="contain"
          source={image}
          style={styles.couponsRXImage}
        />
        <Text style={styles.text}>{message}</Text>
      </View>
    )}
  </View>
);

EmptyList.propTypes = {
  message: PropTypes.string.isRequired,
};

EmptyList.defaultProps = {
  message: strings.emptyList,
  item: {},
  loading: false,
};

export default EmptyList;
