import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TextInput} from 'react-native';

import {strings} from '../../utils';
import iconSearch from '../../assets/img/search.png';

import styles from './styles';
import {Colors} from '../../themes';

const Search = props => (
  <View style={styles.container}>
    <Image style={styles.image} resizeMode="contain" source={iconSearch} />
    <TextInput
      {...props}
      style={styles.textInput}
      placeholder={strings.placeholderSearch}
      placeholderTextColor={Colors.white}
    />
  </View>
);

Search.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func,
};

Search.defaultProps = {};

export default Search;
