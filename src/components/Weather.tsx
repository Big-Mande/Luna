import { useState, useEffect } from "react";
import { getLocalWeatherData } from "../dataService";
import styles from './weather.module.css';


// set a weather state and a load state to know if the data has arrived yet
export default function Weather () {
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [time, setTime] = useState(new Date());


// useEffect to render when the component is loaded
useEffect(() => {

    const intervalID = setInterval(() => {
        setTime(new Date());
    }, 1000);

    async function loadData() {
        try {
            const request = await getLocalWeatherData();
            console.log(request)
            setWeather(request['data']);
        }
        catch (error) {
            console.error("error encountered in Weather Component: ", error);
        }
        // use a load state to know if we are waiting to load data from Open Weather API
        finally {
            setLoading(false);
        }
    }

    loadData();

    // cleanup interval upon returning
    return () => clearInterval(intervalID);
}, []);

if (loading) return <div className={styles.weatherBar} >Fetching weather data...</div>
if (!weather) return <div className={styles.weatherBar} >No weather data available...</div>

const weatherDescription: string = (weather) ? weather['current']['weather'][0]['description'] : "Error getting feelsLike data";
const temp: string = (weather) ? weather['current']['temp'] : "Error getting temperature data";
const formattedTime: string = time.toLocaleTimeString(); 
const formattedDate: string = time.toLocaleDateString();

return(

    <div className={styles.body}>

        <div className={styles.container} >

            <div className={styles.weather}>
                <p className={styles.poppinsMedium} >{temp}&deg;F </p>
                <p className={styles.description} >{weatherDescription}</p>
            </div>

            <div className={styles.time} >
                <p className={styles.poppinsMedium} >{formattedTime}</p> 
                <p className={styles.date}>{formattedDate}</p>
            </div>

        </div>

    </div>
)

}
