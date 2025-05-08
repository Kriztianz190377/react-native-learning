import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'

export const CounterScreen = () => {
const [counter, setCounter] = useState(10)



  return (
    <View style={styles.container}>
      <Text  style={styles.title}>{counter}</Text>

      <Pressable 
      style={({pressed})=>[
        styles.button,
        pressed 
        && 
        styles.buttonPressed
      ]

      }
      onPress={()=>setCounter(counter+1)}
      onLongPress={()=>setCounter(0)}
       >
        <Text style={{color:'white'}}> Increment</Text> 
      </Pressable>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center",
    },
    title:{
        fontSize:45,
        color:'black',
        fontWeight:'300'
    },
button:{
    backgroundColor:"#5856D6",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
},
  buttonPressed:{
    backgroundColor:'#4746AB'
  } 
   
   })