import React from 'react'
import { View, Text, SafeAreaView, Image, Linking } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import call from 'react-native-phone-call'


export default function Service({ route }) {

    const {title, description, value, phone} = route.params

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
            </View>

            <View style={styles.serviceHeader}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/300' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            
            <Text style={styles.description}>
                {description}
            </Text>

            <Text style={styles.description}>
                R$ {Number( value / 100).toFixed(2)}
            </Text>

            <Text style={styles.description} onPress={() => {
                const args = {
                    number: phone,
                    prompt: true
                  }
                call(args).catch(console.error)
            }}>
                {phone}
            </Text>
        </SafeAreaView>
    )
}
