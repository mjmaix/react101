import axios from 'axios';

const API_KEY = '27206f80b842e6992bc3ef45b999a7d9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY = 'PH';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${COUNTRY}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}