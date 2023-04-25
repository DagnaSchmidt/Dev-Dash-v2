import React, { useState } from 'react';
import axios from 'axios';
const KEY = process.env.REACT_APP_GEODB_KEY;

const WeatherAddLocalizationCard = () => {
    const [searchedLocalization, setSearchedLocalization] = useState('');
    const [localizationPropositions, setLocalizationPropositions] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchedLocalization(value);
        console.log(value);
        if(value.length >= 3){
            const locationSearch = {
                method: 'GET',
                url: `https://foreca-weather.p.rapidapi.com/location/search/${value}`,
                params: {lang: 'en'},
                headers: {
                    'content-type': 'application/octet-stream',
                    'X-RapidAPI-Key': KEY,
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            axios.request(locationSearch).then(function (response) {
                const json = response.data.locations;
                console.log(json);
                //setWeatherForecastData(json);
                //setDisplayedDay(json[0].date);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
  return (
    <>
        <input
            type='text'
            className='notes__right__title headline-medium'
            id='localizationSearch'
            name='localizationSearch'
            value={searchedLocalization}
            onChange={handleChange}
            autoComplete='off'
            maxLength={20}
        />
        <div className='weather__localizations'>
            {localizationPropositions.length !== 0 &&
                localizationPropositions.map((item) => {
                    return (
                        <button></button>
                    )
                })
            }
        </div>
    </>
  )
}

export default WeatherAddLocalizationCard;