import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import AuthLabel from '../../components/AuthLabel';
import Button from '../../components/Button';
import Input from '../../components/Input';
import UserTypeContainer from '../../components/UserTypeContainer';

import colors from '../../theme/colors';

import api, { saveToken } from '../../service/api';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<any>();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('Cliente');

    async function signin() {
        setLoading(true);
        api.post('/auth/signin', {email, password})
            .then(async ({ data }) => {
                Alert.alert('Login feito com sucesso 🙏', 'Agora so dale');
                const token: string = data.token;
                await saveToken(token);
            })
            .catch(() => Alert.alert('Algo deu errado 😭', 'Verifique sua senha e tente novamente !'))
            .finally(() => setLoading(false));
    }

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

                    <AuthLabel 
                        title="Ainda não tem uma conta ?"
                        onPress={handleNotRegister}
                    />

                    <Button 
                        title="Entrar"
                        onPress={signin}
                        loading={loading}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
