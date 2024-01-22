import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './InputHeader.styles';
import CustomIcon from '../CustomIcon';
import {COLORS, FONTSIZE} from '../../theme/theme';

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        placeholder="Search movie..."
        placeholderTextColor={COLORS.WhiteRGBA32}
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        activeOpacity={0.6}
        onPress={() => props.handleSearchMovie(searchText)}>
        <CustomIcon
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
