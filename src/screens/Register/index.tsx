import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AuthLabel from '../../components/AuthLabel';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../theme/colors';

import api from '../../service/api';

import styles from './styles';

export default function Register({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signup() {
        setLoading(true);
        api.post('/auth/signup', {email, password})
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                Alert.alert('Algo deu errado 😭', 'Tente novamente mais tarde !')
                console.log(error);
            })
            .finally(() => setLoading(false));
    }


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
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Input 
                        label="Email"
                        placeholder="teste@gmail.com"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor={colors.textLight}
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Input 
                        label="Senha"
                        placeholder="****"
                        keyboardType="default"
                        placeholderTextColor={colors.textLight}
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />

                    <Input 
                        label="Confirme sua senha"
                        placeholder="****"
                        keyboardType="default"
                        placeholderTextColor={colors.textLight}
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />


                    <AuthLabel 
                        title="Já tem uma conta ?"
                        onPress={handleAlreadyRegister}
                    />

                    <Button 
                        title="Cadastrar"
                        onPress={signup}
                        loading={false}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
