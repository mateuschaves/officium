import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface ITextInput extends TextInputProps {
    label?: string;
}

export default function Input({ label, ...props }: ITextInput) {
    return (
        <View style={styles.container}>
            { label && <Text style={styles.label}>{label}</Text> }
            <TextInput
                {...props}
                style={[styles.input, props.style]}
            />
        </View>
    )
}
