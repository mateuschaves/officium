import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ola, Mateus !</Text>
            <Image 
                style={styles.avatar}
                source={{
                     uri: "https://avatars.githubusercontent.com/u/34848657?v=4"
                }}
            />
        </View>
    )
}
