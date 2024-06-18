import { Platform, StyleSheet } from "react-native";




export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10
    },
    title: {
        color: 'black',
        fontSize: 80,
        fontWeight: '300',

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 20 : 0,
    },

})

