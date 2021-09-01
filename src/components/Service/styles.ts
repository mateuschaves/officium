import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingTop: 8,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        marginRight: 16,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 12,
        fontWeight: "700"
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 90,
        margin: 8,
    },
    description: {
        fontSize: 10,
        fontWeight: '400',
        marginBottom: 30,
    }
})

export default styles;