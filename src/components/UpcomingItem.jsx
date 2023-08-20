import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"

const UpcomingItem = (props) => {
  const {dt_txt,main:{temp_max,temp_min},weather}=props
  const {main}=weather[0]
  
  return (
    <View style={styles.container}>
        <Feather name="sun" size={25} color="yellow"/>
        <Text style={styles.textStyle}>{dt_txt}</Text>
        <View style={styles.containerTemp}>
          <Text style={styles.textStyle}>{temp_max}</Text>
          <Text style={styles.textStyle}>{temp_min}</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        flexDirection:"row",
        backgroundColor:"black", 
        justifyContent:"space-around" ,
        marginHorizontal:16,
        marginVertical:8,      
    },
    textStyle:{
      color:"white"
    },
    containerTemp:{
      flexDirection:"row",
      gap:5
    }
})
export default UpcomingItem
