import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import WeatherCard from './WeatherCard';
import WeatherNavBtn from './WeatherNavBtn';
const KEY = process.env.REACT_APP_GEODB_KEY

const WeatherForecastCards = ({latitude, longitude}) => {
    const [weatherForecastData, setWeatherForecastData] = useState();

    const options = {
        method: 'GET',
        url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${longitude},${latitude}`,
        params: {alt: '0', tempunit: 'C', windunit: 'MS', periods: '8', dataset: 'full'},
        headers: {
            'X-RapidAPI-Key': KEY,
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        const json = response.data;
        console.log(response.data);  //-> delete later
        setWeatherForecastData(json);
    }).catch(function (error) {
        console.error(error);
    });

  return (
    <>
        <div className='weather-forecast-cards'>

        </div>
        <div className='weather-forecast-nav'>

        </div>
    </>
  )
}

const mapStateToProps = store => {
    return { 
    };
  };
  const mapDispatchToProps = dispatch => {
    return {

    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastCards);