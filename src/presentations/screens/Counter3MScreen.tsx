import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/global.styles'
import Icon from 'react-native-vector-icons/Ionicons'

import { FAB } from 'react-native-paper'

export const Counter3Mcreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{count} </Text>
            {/* <Icon name="accessibility-outline" color={'red'} size={35} /> */}

            <FAB
                // label="+1"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon="add-outline"
            // icon={()=> <Icon  name="accessibility-outline" color={'red'} size={25} />}
            />

        </View>
    )
}