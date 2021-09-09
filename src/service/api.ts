import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})


export async function saveToken(token: string) {
    if (token) {
        try {
            await AsyncStorage.setItem('@officium/token', JSON.stringify(token))
        } catch (error) {
            throw error
        }
    }
}

export async function getToken(): Promise<String | null> {
    try {
        return await AsyncStorage.getItem('@officium/token');
    } catch (error) {
        throw error;
    }
}

export default api;