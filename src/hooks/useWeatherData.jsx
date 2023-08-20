import React from 'react'
import { useState,useEffect } from 'react'
import {API_KEY} from "@env"
import * as Location from "expo-location"


const useWeatherData = () => {
    const [weather,setWeather]=useState([])
    const [long,setLong]=useState([])
    const [lat,setLat]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    
    const fetchWeatherData=async()=>{
        try{
            setError(null)
            setIsLoading(true)
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            const data=await res.json()
            setWeather(data)
        }catch(error){
            setIsLoading(false)
            setError(error)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        (async()=>{
            const {status}=await Location.requestForegroundPermissionsAsync()
            if(status != "granted"){
                setError("Access location was denied")
            }
            let location=await Location.getCurrentPositionAsync()
            setLong(location.coords.longitude)
            setLat(location.coords.latitude)
            await fetchWeatherData()
        })();
    },[])
 
    return {weather,error,isLoading}
}

export default useWeatherData
