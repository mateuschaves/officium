import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface AuthLabelProps {
    title: string;
    onPress: () => void;
}

export default function AuthLabel({ title, onPress }: AuthLabelProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}
