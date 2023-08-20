import React from 'react'
import {StyleSheet,View,Text,ImageBackground,FlatList} from "react-native"
import {items} from "../data/items"
import UpcomingItem from '../components/UpcomingItem'


const Upcoming = () => {
const renderItem=(({item})=>(<UpcomingItem {...item}/>)) 
  return (
    <ImageBackground
    style={styles.containerImg}
    source={require("../../assets/upcoming-background.jpg")}
    >
    <FlatList
        style={{paddingTop:10}}
        renderItem={renderItem}
        data={items}
        keyExtractor={item=>item.dt_txt}
    />
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    containerImg:{
        flex:1
    }
})

export default Upcoming
