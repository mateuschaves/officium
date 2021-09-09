import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://ec2-54-198-92-183.compute-1.amazonaws.com:3000'
})

interface SaveTokenProps {
    accessToken: string;
    type: number;
    id: number;
}

export async function saveToken(data: SaveTokenProps) {
    if (data.accessToken) {
        try {
            await AsyncStorage.setItem('@officium/token', JSON.stringify(data))
        } catch (error) {
            throw error
        }
    }
}

export async function getToken(): Promise<SaveTokenProps | null> {
    try {
        return JSON.parse(await AsyncStorage.getItem('@officium/token') || '{}') as unknown as SaveTokenProps;
    } catch (error) {
        throw error;
    }
}

export default api;