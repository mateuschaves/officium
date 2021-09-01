import React from 'react'
import { View, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView, Text } from 'react-native'

import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import Category from '../../components/Category'
import images from '../../config/images'

import styles from './styles'
import Service from '../../components/Service'

export default function Home() {

    const categories = [
        {
            title: 'Limpeza',
            image: images.Cleaning,
            selected: true,
        },
        {
            title: 'Elétrica',
            image: images.Electric
        },
        {
            title: 'Hidráulica',
            image: images.Plumbing
        },
        {
            title: 'TI',
            image: images.Computer
        },
        {
            title: 'Design',
            image: images.Design
        },
        {
            title: 'Reforma',
            image: images.Cleaver
        },
    ]

    const services = [
        {
            title: 'Protótipo de aplicativo',
            description: 'Desenvolvo toda a experiência de navegação do usuário dentro do seu aplicativo',
            image: images.Design,
            onPress: () => {}
        },
        {
            title: 'Troca de resistência',
            description: 'Troco a resistência do seu chuveiro',
            image: images.Electric,
            onPress: () => {}
        },
        {
            title: 'Desenvolvimento Mobile',
            description: 'Desenvolvo aplicativos para sua empresa',
            image: images.Computer,
            onPress: () => {}
        },
        {
            title: 'Protótipo de aplicativo',
            description: 'Desenvolvo toda a experiência de navegação do usuário dentro do seu aplicativo',
            image: images.Design,
            onPress: () => {}
        }
    ]

    return (
        <SafeAreaView style={styles.keyboard}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Header />
                    <SearchInput 
                    />
                </View>
            </TouchableWithoutFeedback>

            <Text style={styles.title}>
                Em alta
            </Text>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {
                    services.map((service, index ) => <Service
                        key={index}
                        image={"https://i.pravatar.cc/54"}
                        description={service.description}
                        title={service.title}
                        onPress={service.onPress}
                    />
                    )
                }
            </ScrollView>

            <Text style={styles.title}>
                Categorias
            </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.services}>
                        {
                            categories.map((service, index ) => <Category
                                key={index}
                                image={service.image}
                                name={service.title}
                                selected={service.selected}
                            /> )
                        }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
