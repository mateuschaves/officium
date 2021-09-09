import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import SearchInput from '../../components/SearchInput'
import Header from '../../components/Header'

import styles from './styles';
import VerticalService from '../../components/VerticalService';
import api from '../../service/api';


interface ServiceProps {
    id: number;
    title: string;
    description: string;
    value: number;
    category: string;
}

export default function Services({navigation, route}) {

    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState<ServiceProps[]>([])
    const [term, setTerm] = useState('');

    const {category} = route.params;


    async function search(title: string, category: string) {
        console.log('search', title);
        api.get<ServiceProps[]>(`/service?title=${title}&category=${category}`)
            .then(({data}) => setServices(data))
            .catch(console.log)
    }

    useEffect(() => {
        search(term, category);
    }, [term])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <SearchInput 
                    onChangeText={setTerm} 
                    value={term} 
                />
            </View>

            <Text style={styles.title}>
                Resultado
            </Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.services}>
                    {
                        services.map(service => <VerticalService
                            key={service.id}
                            title={service.title}
                            image="https://i.pravatar.cc/54"
                            onPress={() => navigation.navigate('Service', service)}
                            price={service.value}
                            description={service.description}
                        />)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
