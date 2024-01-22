import {Text} from 'react-native';
import React from 'react';
import styles from './CategoryHeader.styles';

const CategoryHeader = (props: any) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

export default CategoryHeader;
