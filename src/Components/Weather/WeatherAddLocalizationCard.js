import React, { useState } from 'react';
import axios from 'axios';
const KEY = process.env.REACT_APP_GEODB_KEY;

const WeatherAddLocalizationCard = () => {
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
            />
            <label 
                htmlFor='localizationSearch' 
                className='label'>
                localization
            </label>
            <button onClick={() => clear()}>
                clear
            </button>
        </div>
        
        <div className='weather__localizations'>
            {localizationPropositions.length !== 0 &&
                localizationPropositions.map((item) => {
                    return (
                        <button key={item.id}>
                            {item.name}{item.country}
                        </button>
                    )
                })
            }
        </div>
    </>
  )
}

export default WeatherAddLocalizationCard;