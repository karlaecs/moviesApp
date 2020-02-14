import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, Image, ActivityIndicator} from 'react-native';
import Colors from '../../themes/colors';

import styles from './styles';

const Footer = ({image, message, loading}) => (
  <View style={styles.container}>
    <Text style={styles.text}> Power by Karla Elisabeth @karlaecs</Text>
  </View>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
