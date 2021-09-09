import styled from 'styled-components/native';
import colors from '../../theme/colors';

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #777777;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`;

export const Option = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: ${(props: { selected: any; }) =>
        props.selected ? colors.primary : '#ffffff'};
    border-radius: 8px;
    height: 56px;
`;

export const Options = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const ButtonLabel = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${(props: { selected: any; }) => (props.selected ? '#fff' : '#777777')};
`;