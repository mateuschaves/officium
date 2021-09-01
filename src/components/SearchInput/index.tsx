import React from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import styles from './styles'

interface SearchInputProps extends TextInputProps {
    iconSize?: number;
}

export default function SearchInput({ iconSize = 24, ...props }: SearchInputProps) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons 
                    name="search"
                    size={iconSize}
                />
            </View>
            <TextInput 
                style={styles.input}
                placeholder={"Buscar serviço"}
                {...props}
            />
        </View>
    )
}
