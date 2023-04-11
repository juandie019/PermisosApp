import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: 'white',
            },
        }}
    >
      <Stack.Screen name="MapScreen" component={ MapScreen } />
      <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
      <Stack.Screen name="LoadingScreen" component={ LoadingScreen } />
    </Stack.Navigator>
  );
};


