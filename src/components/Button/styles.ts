import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 16,
        padding: 8,
        width: '100%',
        height: 60,
    },
    root: {
        width: '100%'
    },
    title: {
        color: colors.background,
        fontSize: 20,
        fontWeight: '500',
    }
});

export default styles;