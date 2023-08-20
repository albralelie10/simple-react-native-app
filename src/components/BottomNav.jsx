import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Upcoming from '../views/Upcoming'
import City from "../views/City"
import Current from "../views/Current"
import {Feather} from "@expo/vector-icons"


const Tab=createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:{
        color:"white"
      },
      tabBarInactiveTintColor:{
        color:"grey"
      },
      tabBarStyle:{
        color:"white"
      },
    headerStyle:{
      backgroundColor:"purple"
    },
    headerTitleStyle:{
      color:"white"
    }
    }}
    >
      <Tab.Screen
      name="Upcoming"
      options={{
       tabBarStyle:{
        backgroundColor:"purple"
       },
       tabBarIcon:(state)=>(<Feather name="clock" size={25} color={state ? "white":"grey"}/>)
        
      }}
      component={Upcoming}
      />
      <Tab.Screen
      name="City"
      options={{
        tabBarIcon:(state)=>(<Feather name="home" size={25} color={state ? "white":"grey"} />),
        tabBarStyle:{
          backgroundColor:"purple"
        },
        tabBarLabelStyle:{
          color:"white"
        }
      }}
      component={City}
      />
      <Tab.Screen
      name="Current"
      options={{
        tabBarIcon:(state)=>(<Feather name="home" size={25} color={state ? "white":"grey"} />),
        tabBarStyle:{
          backgroundColor:"purple",
        },
        tabBarLabelStyle:{
          color:"white"
        }
      }}
      component={Current}
      />
    </Tab.Navigator>
  )
}

export default BottomNav
