
import { Text, Pressable, StyleSheet, Platform } from 'react-native';

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}


export const PrimaryButtons = ({ label, onPress, onLongPress }: Props) => {

    return (
        <>
            <Pressable
                onPress={ () => onPress && onPress() }
                onLongPress={() => onLongPress && onLongPress()}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
            >
                <Text style={styles.buttontext}> {label}</Text>
            </Pressable >
        </>

    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: Platform.OS === 'android' ? '#1f1cd5' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746Ab' : 'white',
    },
    buttontext: {
        color: Platform.OS === 'android' ? 'white' : '#4746Ab',
        // padding:10
    }
})