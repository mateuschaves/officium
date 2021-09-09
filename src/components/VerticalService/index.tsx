import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ServiceProps {
    title: string;
    onPress: () => void;
    description: string;
    image: any;
    price: number,
}

export default function VerticalService({ title, onPress, description, image, price }: ServiceProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{ uri: image}}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>R$ {Number(price / 100).toFixed(2)}</Text>
                </View>
            </View>
            <Text 
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode="tail"
            >{description}</Text>
        </TouchableOpacity>
    )
}
