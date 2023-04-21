import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import WeatherCard from './WeatherCard';
import WeatherNavBtn from './WeatherNavBtn';
const KEY = process.env.REACT_APP_GEODB_KEY

const WeatherForecastCards = ({latitude, longitude}) => {
    const [weatherForecastData, setWeatherForecastData] = useState([]);
    const [currentTemp, setCurrentTemp] = useState();

    useEffect(() => {
        const weekForecast = {
            method: 'GET',
            url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${longitude},${latitude}`,
            params: {alt: '0', tempunit: 'C', windunit: 'MS', periods: '8', dataset: 'full'},
            headers: {
                'X-RapidAPI-Key': KEY,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        };
        axios.request(weekForecast).then(function (response) {
            const json = response.data.forecast;
            console.log(response.data.forecast);  //-> delete later
            setWeatherForecastData(json);
        }).catch(function (error) {
            console.error(error);
        });
        const currentWeather = {
            method: 'GET',
            url: `https://foreca-weather.p.rapidapi.com/current/${longitude},${latitude}`,
            params: {alt: '0', tempunit: 'C', windunit: 'MS', tz: 'Europe/London', lang: 'en'},
            headers: {
                'X-RapidAPI-Key': KEY,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        };
        axios.request(currentWeather).then(function (response) {
            const json = response.data.current.temperature;
            setCurrentTemp(json);
            console.log(response.data.current.temperature);  //-> delete later
        }).catch(function (error) {
            console.error(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const weatherCards = weatherForecastData.map((item) => {
        return (
            <WeatherCard
                currentTemp={currentTemp}
                {...item}
                // maxTemp={item.maxTemp}
                // minTemp={item.minTemp}
                // sunrise={item.sunrise}
                // sunset={item.sunset}
                // symbolPhrase={item.symbolPhrase}
                // pressure={item.pressure}
                // cloudiness={item.cloudiness}
                // maxRelHumidity={item.maxRelHumidity}
                // minRelHumidity={item.minRelHumidity}
                // maxWindSpeed={item.maxWindSpeed}
                // minWindSpeed={item.minWindSpeed}
                // precipProb={item.precipProb}
                // precipAccum={item.precipAccum}
                // uvIndex={item.uvIndex}
            />
        )
    })

  return (
    <>
        <div className='weather-forecast-cards'>
            {weatherForecastData.length != 0 && weatherCards}
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