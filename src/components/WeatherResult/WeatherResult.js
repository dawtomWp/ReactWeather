import React from 'react';
import styles from './WeatherResult.module.scss'

const WeatherResult = props => {

    const {date, city, sunrise, sunset, temp, pressure, wind, err, desc, feelsLike , optionalDesc} = props.weather

    let content = null;

    if(!err) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});;
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});;

        const celsius = temp
 
       // const feelsLike = (5/9) * (feels - 32)

        content = (
            <section className={styles.wrapper}>
            <div className={styles.mainInfo}>
             <h2>{city}</h2>
             <h3>{date} </h3>

             <div className={styles.temperature}>
                     <span>{celsius} °C</span>
                     <span>Sensed temperature {feelsLike} °C</span>
                 </div>
             </div>
             <div className={styles.description}>
               <div className={styles.weather}>
                     <p>Weather: </p>
                     <span>{desc}</span>
                 </div>
           
                 <div className={styles.possible}>
                     <p>Possible: </p>
                     <span>{optionalDesc}</span>
                 </div>
             </div>
             <div className={styles.additionalInfo}>

                 <div>
                     <p>Sunrise:</p>
                     <span>{sunriseTime}</span>
                 </div>

                 <div>
                     <p>Sunset:</p>
                     <span>{sunsetTime}</span>
                 </div>

                 <div>
                     <p>Wind:</p>
                     <span>{wind} m/s</span>
                 </div>

                 <div>
                     <p>Pressure:</p>
                     <span>{pressure} hPa</span>
                 </div>

          
                
             </div>
            </section>
        )
    }
    return (
        <div>
           {err ? `${city} not found` : content} 
        </div>
    )
}

export default WeatherResult
