import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButtons } from '../components'


export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>

            <PrimaryButtons
                label='increment'
                onPress={() => { setCount(count + 1) }}
                onLongPress={() => (setCount(0))}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 80,
        fontWeight: '300'
    },

})