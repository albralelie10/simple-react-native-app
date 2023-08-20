import React from 'react'
import {View,StyleSheet,StatusBar} from "react-native"
import BottomNav from './src/components/BottomNav'
import { NavigationContainer } from '@react-navigation/native'
import useWeatherData from './src/hooks/useWeatherData'
import {ActivityIndicator} from "react-native"
import ErrorScreen from './src/components/ErrorScreen'

const App = () => {
  const {error,isLoading}=useWeatherData()

  if(isLoading){
    <View styles={styles.wrapper}>
        <ActivityIndicator
          color="red"
          size={100}
        />
    </View>
  }else{
    return (
      <NavigationContainer>
        <View style={styles.wrapper}>
        {error ? <ErrorScreen/>:<BottomNav/>}
        </View>
      </NavigationContainer>
    )
  }
 
}

const styles=StyleSheet.create({
  wrapper:{
    marginTop:StatusBar.currentHeight|| 0,
    flex:1,
  }
})
export default App
