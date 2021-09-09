import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, View, Text, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context'

import api from '../../service/api';

interface ServiceProps {
    title: string;
    description: string;
    value: number;
    categoryType: string;
}

interface CategoryProps {
    name: string;
    value: number;
}

export default function NewService({ navigation }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState<CategoryProps | null>(null)
    const [categories] = useState<CategoryProps[]>([
        {
            "name": "Tecnologia",
            "value": 1,
        },
        {
            "name": "Limpeza",
            "value": 2,
        },
        {
            "name": "Elétrica",
            "value": 3,
        },
        {
            "name": "Construção Civil",
            "value": 4,
        },
        {
            "name": "Hidráulica",
            "value": 5,
        },
        {
            "name": "Design",
            "value": 6,
        }
    ])

    async function createService(data: ServiceProps) {
        return api.post<ServiceProps>('/service', data);
    }

    function handleCreateServiceSuccess() {
        Alert.alert('Serviço cadastrado !', 'Agora os clientes já podem visualizar seu serviço')
        navigation.navigate('Home')
    }

    async function handleSubmit() {
        setLoading(true)

        const serviceToCreate: ServiceProps = {
            title,
            description,
            value,
            categoryType: String((category?.value || '1') || '1')
        }

        createService(serviceToCreate)
            .then(handleCreateServiceSuccess)
            .catch(() => Alert.alert('Algo deu errado !', 'Erro ao cadastrar o serviço'))
            .finally(() => setLoading(false))
    }

    return (
        <SafeAreaView style={styles.container}>
            <>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.form}>
                        <Input 
                            label="Título do serviço"
                            onChangeText={title => setTitle(title)}
                            value={title}
                        />
                        <Input 
                            label="Descrição do serviço"
                            multiline
                            onChangeText={description => setDescription(description)}
                            value={description}
                        />
                        <Input 
                            label="Preço"
                            keyboardType="decimal-pad"
                            onChangeText={value => setValue(Number(value))}
                            value={String(value)}
                        />

                        <Text style={styles.categoryLabel}>Categoria</Text>
                        <Picker
                            selectedValue={category}
                            onValueChange={itemValue => setCategory(itemValue)}>
                                {
                                    categories.map(category => <Picker.Item
                                            key={category.value}
                                            label={category.name}
                                            value={category.value}
                                        />)
                                }
                        </Picker>
                    </View>
                </TouchableWithoutFeedback>
                <Button
                    title="Cadastrar"
                    loading={loading}
                    onPress={handleSubmit}
                />
            </>
        </SafeAreaView>
    )
}
