import React from 'react';
import { View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthLabel from '../../components/AuthLabel';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../theme/colors';

import styles from './styles';

export default function Login({ navigation }) {

    function handleNotRegister() {
        navigation.navigate('Register');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboard}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.container}>
                    <Input 
                        label="Email"
                        placeholder="teste@gmail.com"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoFocus
                        autoCapitalize="none"
                        placeholderTextColor={colors.textLight}
                    />

                    <Input 
                        label="Senha"
                        placeholder="****"
                        keyboardType="default"
                        placeholderTextColor={colors.textLight}
                        secureTextEntry
                    />


                    <AuthLabel 
                        title="Ainda não tem uma conta ?"
                        onPress={handleNotRegister}
                    />

                    <Button 
                        title="Entrar"
                        onPress={() => {}}
                        loading={false}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
