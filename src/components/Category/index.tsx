import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles';

interface CategoryProps {
    name: string;
    image: any;
    selected?: boolean;
}

export default function Category({name, image, selected = false}: CategoryProps) {
    return (
        <View style={selected ? styles.containerHover: styles.container}>
            <Image 
                style={styles.image}
                source={image}
                width={54}
            />
            <Text style={selected ? styles.titleHover: styles.title}>{name}</Text>
        </View>
    )
}
