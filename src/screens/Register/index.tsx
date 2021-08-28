import React from 'react';
import { View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthLabel from '../../components/AuthLabel';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../theme/colors';

import styles from './styles';

export default function Register({ navigation }) {

    function handleAlreadyRegister() {
        navigation.navigate('Login');
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
                        label="Nome"
                        placeholder="Mateus Henrique"
                        keyboardType="name-phone-pad"
                        autoFocus
                        autoCapitalize="words"
                        placeholderTextColor={colors.textLight}
                    />

                    <Input 
                        label="Email"
                        placeholder="teste@gmail.com"
                        keyboardType="email-address"
                        autoCorrect={false}
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

                    <Input 
                        label="Confirme sua senha"
                        placeholder="****"
                        keyboardType="default"
                        placeholderTextColor={colors.textLight}
                        secureTextEntry
                    />


                    <AuthLabel 
                        title="Já tem uma conta ?"
                        onPress={handleAlreadyRegister}
                    />

                    <Button 
                        title="Cadastrar"
                        onPress={() => {}}
                        loading={false}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
