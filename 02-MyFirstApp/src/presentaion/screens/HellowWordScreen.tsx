import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


interface Props{
    name?:string;
}



export const HellowWordScreen = ({name}:Props) => {
  return (
    <View style={styles.container}>
      <Text 
      numberOfLines={1} 
      ellipsizeMode='middle'
      style={styles.title} >Hello, My name is  {name}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"gray",
    },
    title:{
        fontSize:45,
        textAlign:'center',
        color:'black',
        padding:20
    }

})