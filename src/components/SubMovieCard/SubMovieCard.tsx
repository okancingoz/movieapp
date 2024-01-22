import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './SubMovieCard.styles';
import {SPACING} from '../../theme/theme';

const SubMovieCard = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPressSubMovieCard}>
      <View
        style={[
          styles.container,
          props.shouldMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_32}
              : props.isLast
              ? {marginRight: SPACING.space_32}
              : {}
            : {},
          props.shouldMarginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: props.width},
        ]}>
        <Image
          style={[styles.image, {width: props.width}]}
          source={{uri: props.imagePath}}
        />
        <Text numberOfLines={1} style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;
