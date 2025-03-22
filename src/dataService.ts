import axios from "axios";

// get api keys
const VITE_SPOTIFY_CLIENT_ID: string = import.meta.env.VITE_SPOTIFY_API_CLIENT_ID;
const VITE_SPOTIFY_CLIENT_SECRET: string = import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET;
const VITE_OPEN_WEATHER_API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

// lat and long have been hardcoded for appropriate area
const openWeatherURL: string = "https://api.openweathermap.org/data/3.0/onecall?lat=36.1672559&lon=-115.148516&units=imperial&appid=";
const ultraHumanURL: string = 'https://partner.ultrahuman.com/api/v1/metrics?email=';
const nEmail: string = 'lnebalo16@gmail.com';

// functions to make requests and fetch local weather data

export async function getLocalWeatherData(): Promise<any> {
    // try to fetch local weather data
    try {
        const response = axios.get(openWeatherURL + VITE_OPEN_WEATHER_API_KEY);
        console.log(typeof(response))
        return response;
    }

    catch (error: unknown) {
        if (error instanceof Error){
            console.error("Error encountered: ", error.message);
        }
        else {
            console.error("Unknown error: ", error)
        }
    }
}

    // get icon URL from icon code
export async function getLocalWeatherIcon(string: "iconCode"): Promise <any> {
    const response = axios.get(openWeatherURL + VITE_OPEN_WEATHER_API_KEY)
}















