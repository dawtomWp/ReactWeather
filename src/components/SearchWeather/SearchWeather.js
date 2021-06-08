import React from 'react';
import WeatherResult from '../WeatherResult/WeatherResult';
import Form from '../Form/Form';
import styles from './SearchWeather.module.scss'
import '../../Weather.css';
import weatherPlaceholder from '../../images/weatherMain.png'

const API_key = "912c622485ebcccfe6e75ebb3dc2de10";



class SearchWeather extends React.Component {

    state = {
        value: "",
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
        optionalDesc: "",

        showInfo: false
    }
    getSearchWeather = e => {
        e.preventDefault()
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${API_key}&units=metric`

        fetch(API)
        .then(response => {
            if(response.ok) {
                return response
            }
            this.setState({value: ''})
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
               temp: (data.main.temp).toFixed(),
               pressure: data.main.pressure,
               wind: data.wind.speed,
               showInfo: true,
               desc: data.weather[0].main,
               optionalDesc: data.weather[0].description,
               feelsLike: (data.main.feels_like).toFixed()
           }))
           
        })
    }
    handleInputChange = (e) => {
        this.setState({value: e.target.value})
       
    }

  
    render () {
        const {value,showInfo,desc} = this.state
        return (
     
       
         <div className={styles.wrapper}>
                <div className={desc ? desc : null}>
             <Form 
             className={styles.inputSearch}
             value={value}
             change={this.handleInputChange}
             submit={this.getSearchWeather}
             />
             {showInfo ? <WeatherResult weather={this.state}/> : 
             <section>
               <p className={styles.info}>Type a city name</p>
               <img src={weatherPlaceholder} className={styles.weatherPlaceholder} alt="weather"></img>
            </section>
            
            }

         </div>
         </div>
        )
    }

}

export default SearchWeather;