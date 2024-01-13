import MovieDetails from '../../../screens/MovieDetails';
import SeatBooking from '../../../screens/SeatBooking';
import BottomTabNavigator from '../../tabs/BottomTabNavigor/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        component={BottomTabNavigator}
        options={{animation: 'default'}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeatBooking}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
