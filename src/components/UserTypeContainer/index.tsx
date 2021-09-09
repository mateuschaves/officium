import React, {useRef} from 'react';

import * as Animatable from 'react-native-animatable';

import {Container, Option, Options, Title, ButtonLabel} from './styles';

interface UserTypeContainerProps {
    onChangeValue: (value: string) => void;
    value: string;
}

export default function UserTypeContainer({onChangeValue, value = 'Cliente'}: UserTypeContainerProps) {
    const clientButtonRef = useRef<any>();
    const providerButtonRef = useRef<any>();

    function handleClientButtonClick() {
        clientButtonRef.current.zoomIn(200, 20);
    }

    function handleProviderButtonClick() {
        providerButtonRef.current.zoomIn(200, 20);
    }

    return (
        <Container>
            <Title>Eu sou</Title>
            <Options>
                <Animatable.View ref={clientButtonRef} style={{flex: 1}}>
                    <Option
                        selected={value === 'Cliente'}
                        onPress={() => {
                            onChangeValue('Cliente');
                            handleClientButtonClick();
                        }}>
                        <ButtonLabel selected={value === 'Cliente'}>
                            Cliente
                        </ButtonLabel>
                    </Option>
                </Animatable.View>

                <Animatable.View ref={providerButtonRef} style={{flex: 1}}>
                    <Option
                        selected={value === 'Prestador'}
                        onPress={() => {
                            onChangeValue('Prestador');
                            handleProviderButtonClick();
                        }}>
                        <ButtonLabel selected={value === 'Prestador'}>
                            Prestador
                        </ButtonLabel>
                    </Option>
                </Animatable.View>
            </Options>
        </Container>
    );
}