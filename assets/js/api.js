/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Brajesh Prajapati 2024 All rights reserved
 * @author Brajesh Prajapati <prajapatibrajesh003@gmail.com>
 */

'use strict';

const api_key = "4648541f9dded585a6607b57bc4f4f97";

/**
* Fetch data from Server
* @param {string} URL API url
* @param {Function} callback
*/

export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
    }, 
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
    }, 
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
    },

/**
   * @param {string} query search query e.g.: "Narmadapuram", "Itarsi", "Bhopal"
 */

    geo(query){
        return  `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}