import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView, Text, TouchableOpacity } from 'react-native'

import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import Category from '../../components/Category'
import images from '../../config/images'

import styles from './styles'
import Service from '../../components/Service'
import api, { getToken } from '../../service/api'

import { Ionicons } from '@expo/vector-icons';

interface ServiceProps {
    id: number;
    title: string;
    description: string;
    value: number;
    category: string;
}

export default function Home({navigation}) {

    const [userType, setUserType] = useState(0);
    const [userId, setUserId] = useState(0);
    const [services, setServices] = useState<ServiceProps[]>([]);

    useEffect(() => {
        navigation.addListener('focus', () => {
            getServices()
        });
        getToken()
            .then((response) => {
                console.log(response);
                if (response?.type) {
                    setUserType(response?.type)
                    setUserId(response?.id)
                }
            })
    }, [])

    useEffect(() => {
        getServices()
    }, [userId])

    function isClient() {
        return userType === 0;
    }

    async function getServices() {
        api.get<ServiceProps[]>(`/service/provider/${userId}`)
            .then(response => setServices(response.data));
    }

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
                {isClient() ? 'Em alta' : 'Seus serviços'}
            </Text>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <View style={styles.services}>
                    {
                        services.map((service, index ) => <Service
                            key={index}
                            image={"https://i.pravatar.cc/54"}
                            description={service.description}
                            title={service.title}
                            onPress={() => {}}
                        />
                        )
                    }
                </View>
            </ScrollView>

            {isClient() && <Text style={styles.title}>
                Categorias
            </Text>}
            {isClient() && <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.services}>
                        {
                            categories.map((service, index ) => <Category
                                key={index}
                                image={service.image}
                                name={service.title}
                                selected={service.selected}
                                onPress={() => navigation.push('Services', {
                                    category: service.title,
                                })}
                            /> )
                        }
                </View>
            </ScrollView>}

            {
                !isClient() && (
                <TouchableOpacity 
                    style={styles.fab}
                    onPress={() => {
                        navigation.navigate('NewService')
                    }}
                >
                <Ionicons 
                    name="add"
                    color="#fff"
                    size={35}
                />
            </TouchableOpacity>)
            }
        </SafeAreaView>
    )
}
