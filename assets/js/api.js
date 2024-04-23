'use strict'

const api_key = "f43982039dffe231d6658cc7c5eeadd3";



/**
 * Fetch data from server
 * @param {string} URL  api url
 * @param {Function} callBack callback
 */

export const fetchData = function (URL, callBack) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callBack(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    }, 
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
   
    /**
     * 
     * @param {string} query Search query e.g.: "Srinagar", "Dehli"
     */
    
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }    
}
