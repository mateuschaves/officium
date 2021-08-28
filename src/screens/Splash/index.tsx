import React, { useEffect } from 'react';
import { View } from 'react-native';
import { hideAsync } from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function Splash({ navigation }) {

  useEffect(() => {
    async function showApp() {
        await hideAsync();
        navigation.navigate('Auth');
    }
    showApp();
  }, [])

  return (
    <View >
    </View>
  );
}
