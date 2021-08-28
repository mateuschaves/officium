import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        margin: 30,
        width: '100%',
    },
    input: {
        borderColor: colors.primary,
        borderRadius: 16,
        borderWidth: 1,
        padding: 8,
        marginTop: 16,
        width: '100%',
        height: 56,
    },
    label: {
        fontSize: 20,
        color: colors.text,
        // fontFamily: 'AirbnbCeral-Medium',
    }
});

export default styles;