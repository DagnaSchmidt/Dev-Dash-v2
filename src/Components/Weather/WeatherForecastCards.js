import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import WeatherCard from './WeatherCard';
import WeatherNavBtn from './WeatherNavBtn';
import { SET_DISPLAYED_DAY } from '../../actions';
const KEY = process.env.REACT_APP_GEODB_KEY

const WeatherForecastCards = ({latitude, longitude, setDisplayedDay}) => {
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
            setWeatherForecastData(json);
            setDisplayedDay(json[0].date);
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
        }).catch(function (error) {
            console.error(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const weatherCards = weatherForecastData.map((item) => {
        return (
            <WeatherCard
                currentTemp={currentTemp}
                key={item.date}
                {...item}
            />
        )
    })
    const weatherNavBtns = weatherForecastData.map((item) =>{
        return (
            <WeatherNavBtn 
                key={item.date}
                date={item.date}
                maxTemp={item.maxTemp} 
                minTemp={item.minTemp}
            />
        )
    })

  return (
    <>
        <div className='weather__forecast-cards'>
            {weatherForecastData.length != 0 && weatherCards}
        </div>
        <div className='weather__nav'>
            {weatherForecastData.length != 0 && weatherNavBtns}
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
        setDisplayedDay: (newDisplayedDay) => dispatch({type: SET_DISPLAYED_DAY, payload: { newDisplayedDay }})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastCards);