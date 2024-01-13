import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Home.styles';

const Home = ({navigation}: any) => {
  return (
    <Pressable
      onPress={() => {
        navigation.push('MovieDetails');
      }}
      style={styles.container}>
      <Text>Home</Text>
    </Pressable>
  );
};

export default Home;
