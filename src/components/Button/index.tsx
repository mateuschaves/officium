import React, { useRef } from 'react';
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import colors from '../../theme/colors';
import styles from './styles';


interface onPressProps {
    (): void;
}

interface IButton {
    loading?: boolean;
    title: string;
    onPress: onPressProps;
}

export default function Button({ onPress, title, loading }: IButton) {

    const buttonRef = useRef<any>(null);

    function handleButtonClick() {
        buttonRef.current.zoomIn(150, 10);
        if (onPress) {
            onPress();
        }
    }

    function renderButtonContent() {
        if (loading) {
            return <ActivityIndicator 
                color={colors.background}
            />
        } else {
            return <Text style={styles.title}>{title}</Text>
        }
    }

    return (
        <Animatable.View style={styles.root} ref={buttonRef}>
            <TouchableOpacity style={styles.container} onPress={handleButtonClick}>
                {renderButtonContent()}
            </TouchableOpacity>
        </Animatable.View>
    )
}
