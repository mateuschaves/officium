import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
}