import React from 'react';
import {
  View, TextInput, Image, Dimensions,
} from 'react-native';
import styles from '../styles';
import { horizontalScale } from '../styles/mixins';

const Searchbar = ({ title, style }) => (
  <View
    style={
        style || [styles.searchContainer, { width: horizontalScale(303) }, styles.marginL_20]
      }
  >
    <Image
      style={styles.imageSmall}
      source={require('../assets/search-icon.png')}
    />
    <TextInput
      placeholder={title}
      style={[styles.font_14, styles.flex_1, { color: '#000' }]}
    />
  </View>
);

export default Searchbar;
