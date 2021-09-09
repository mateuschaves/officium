import React, { useEffect } from 'react';
import { View } from 'react-native';
import { hideAsync } from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { getToken } from '../../service/api';

export default function Splash({ navigation }) {

  useEffect(() => {
    async function showApp() {
        const token = await getToken();
        if (token) {
          navigation.naviate('Home')
        } else {
          navigation.navigate('Auth')
        }
        await hideAsync();
    }
    showApp();
  }, [])

  return (
    <View >
    </View>
  );
}
