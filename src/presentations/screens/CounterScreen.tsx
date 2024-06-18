import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-paper'
import { PrimaryButtons } from '../components/PrimaryButtons'
import { Counter3Mcreen } from './Counter3MScreen'



export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>

            <Counter3Mcreen />

            <PrimaryButtons

                label='increment button Native'
                onPress={() => { setCount(count + 1) }}
                onLongPress={() => (setCount(0))}
            />
            <Button
                mode="contained"
                onPress={() => { setCount(count + 1) }}
                onLongPress={() => (setCount(0))}
            >
                Increment button Paper
            </Button>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10
    },
    title: {
        color: 'black',
        fontSize: 80,
        fontWeight: '300'
    },

})