import React, { useState } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

interface CategoryProps {
    name: string;
    image: any;
    selected?: boolean;
    onPress: () => void;
}

export default function Category({ name, image, onPress }: CategoryProps) {
    const [press, setPress] = useState(false);

    return (
        <TouchableOpacity onPress={onPress} onPressIn={() => setPress(!press)} onPressOut={() => setPress(!press)} style={press ? styles.containerHover: styles.container}>
            <Image 
                style={styles.image}
                source={image}
                width={54}
            />
            <Text style={press ? styles.titleHover: styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}
