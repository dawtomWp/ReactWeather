import React, {Component} from 'react';
import WeatherResult from '../WeatherResult/WeatherResult';
import styles from './CurrentWeather.module.scss'

const API_key = "912c622485ebcccfe6e75ebb3dc2de10";


navigator.geolocation.getCurrentPosition(function(position) {
    return (
        LAT = position.coords.latitude,
        LON = position.coords.longitude ,
        console.log(LAT,LON)      
    )             
})
let LAT;
let LON;

class CurrentLocationWeather extends Component {

    state = {
        err: false,
        date: "",
        city: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        desc: "",
        feelsLike: "",
        optionalDesc:"",
    }
    getCurrentLocationWeather = () => {
        
        const API = `http://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_key}`

        fetch(API)
        .then(response => {
            if(response.ok) {
                return response
            }
            throw Error("Something went wrong")
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
           const time = new Date().toLocaleString()
           this.setState(state =>({
               err: false,
               date: time,
               city: data.name,
               sunrise: data.sys.sunrise,
               sunset: data.sys.sunset,
               temp:(data.main.temp - 273.15).toFixed(),
               pressure: data.main.pressure,
               wind: data.wind.speed,
               desc: data.weather[0].main,
               feelsLike:(data.main.feels_like -273.15).toFixed(),
               optionalDesc: (data.weather[0].description),
           }))
           
        })
    }
    componentDidMount () {
        this.getCurrentLocationWeather()
    }
  
    render () {
        const {desc} = this.state
        return (
         <div>
          <div className={desc ? desc : null}>
             <WeatherResult weather={this.state}/>
             </div>
         </div>
        )
    }

}

export default CurrentLocationWeather