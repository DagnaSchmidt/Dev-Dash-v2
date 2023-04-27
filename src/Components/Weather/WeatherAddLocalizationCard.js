import React, { useState } from 'react';
import axios from 'axios';
import { IoAdd } from "react-icons/io5";
import { connect } from "react-redux";
import { ADD_WEATHER_LOCALIZATION } from '../../actions';
const KEY = process.env.REACT_APP_GEODB_KEY;

const WeatherAddLocalizationCard = ({ addWeatherLocalization }) => {
    const [searchedLocalization, setSearchedLocalization] = useState('');
    const [localizationPropositions, setLocalizationPropositions] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchedLocalization(value);
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
                setLocalizationPropositions(json);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
    const clear = () => {
        setSearchedLocalization('');
        setLocalizationPropositions([]);
    }
  return (
    <>
        <div className='input-group'>
            <input
                type='text'
                className='input'
                id='localizationSearch'
                name='localizationSearch'
                value={searchedLocalization}
                onChange={handleChange}
                autoComplete='off'
                maxLength={20}
                required
            />
            <label 
                htmlFor='localizationSearch' 
                className='label'>
                    localization
            </label>
            <button className='btn label-medium' onClick={() => clear()}>
                clear
            </button>
        </div>
        <div className='weather__localizations'>
            {localizationPropositions.length !== 0 &&
                localizationPropositions.slice(0,20).map((item) => {
                    console.log(item.lat, item.lon);
                    return (
                        <button key={item.id} className='weather__localizations__btn' onClick={() => addWeatherLocalization(item.lat, item.lon, item.name, item.country)}>
                            <div className='weather__localizations__btn__text'>
                                <p className='body-medium'>{item.name}</p>
                                <p className='label-medium'>{item.country}</p>
                            </div>
                            <IoAdd className='weather__localizations__btn__add-icon' />
                        </button>
                    )
                })
            }
        </div>
    </>
  )
}

const mapDispatchToProps = dispatch => {
    return {
      addWeatherLocalization: (latitude, longitude, city, country) => dispatch({type: ADD_WEATHER_LOCALIZATION, payload: {latitude, longitude, city, country}})
    };
  }

export default connect(null, mapDispatchToProps)(WeatherAddLocalizationCard);