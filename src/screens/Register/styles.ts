import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingTop: 90
    }
});

export default styles;