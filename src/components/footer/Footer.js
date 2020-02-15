import React from 'react';
import PropTypes from 'prop-types';

import {View, Text} from 'react-native';

import styles from './styles';

const Footer = ({}) => (
  <View style={styles.container}>
    <Text style={styles.text}> Power by Karla Elisabeth @karlaecs</Text>
  </View>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
