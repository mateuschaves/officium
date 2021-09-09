import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    form: {
        flex: 1,
        marginBottom: 30,
        width: '100%',
    },
    categoryLabel: {
        marginTop: 30,
        fontSize: 20,
        color: colors.text,
    }
})

export default styles;