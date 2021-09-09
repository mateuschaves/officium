import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingTop: 8,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
    },
    price: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: "600",
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 90,
        margin: 8,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 30,
    }
})

export default styles;