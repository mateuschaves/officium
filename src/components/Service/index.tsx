import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles';

interface ServiceProps {
    title: string;
    onPress: () => void;
    description: string;
    image: any;
}

export default function Service({ title, onPress, description, image }: ServiceProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{ uri: image}}
                    style={styles.image}
                />
                <Text style={styles.title}>{title}</Text>
            </View>

            <Text 
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {description}
            </Text>
        </View>
    )
}
