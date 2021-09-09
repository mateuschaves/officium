import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import NewServiceScreen from '../screens/NewService';
import ServicesScreen from '../screens/Services';
import ServiceScreen from '../screens/Service';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="NewService" component={NewServiceScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Service" component={ServiceScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}