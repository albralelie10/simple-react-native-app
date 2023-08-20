import React from 'react'
import {Feather} from "@expo/vector-icons"
import {View,Text,StyleSheet} from "react-native"

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
        <Feather
        size={100}
        color="white"
        name="frown"
        />
        <Text style={{color:"white"}}>
            Something wont wrong
        </Text>
    </View>
      )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center"
  }
})

export default ErrorScreen
