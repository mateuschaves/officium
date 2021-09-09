import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from 'react-native';
import AuthLabel from '../../components/AuthLabel';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../theme/colors';

import api from '../../service/api';

import styles from './styles';
import UserTypeContainer from '../../components/UserTypeContainer';

export default function Register({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('Cliente');

    async function signup() {
        setLoading(true);
        api.post('/auth/signup', {name, email, phone: type === 'Cliente' ? '' : phone , password, type: type === 'Cliente' ? 0 : 1 })
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.log(error.response.data)
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
                <ScrollView>
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
                                    onChangeText={setName}
                                    value={name}
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
                                    label="Telefone"
                                    placeholder="81 973248342"
                                    keyboardType="decimal-pad"
                                    placeholderTextColor={colors.textLight}
                                    onChangeText={setPhone}
                                    value={phone}
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

                                <UserTypeContainer 
                                    onChangeValue={setType}
                                    value={type}
                                />


                                <AuthLabel 
                                    title="Já tem uma conta ?"
                                    onPress={handleAlreadyRegister}
                                />

                                <Button 
                                    title="Cadastrar"
                                    onPress={signup}
                                    loading={loading}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
    )
}
