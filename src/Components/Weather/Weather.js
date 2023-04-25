import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ADD_WEATHER_LOCALIZATION } from '../../actions';
import '../../Styles/Components_Styles/Weather/Weather.css';
import WeatherForecastCards from './WeatherForecastCards';
import WeatherAddLocalizationCard from './WeatherAddLocalizationCard';

const Weather = ({ localization, latitude, longitude, city, country, weatherLatitude, weatherLongitude, addWeatherLocalization }) => {
  console.log(weatherLatitude, weatherLongitude);
  
  return (
    <section className='weather'>
      {weatherLatitude ?
        <WeatherForecastCards 
          latitude={weatherLatitude}
          longitude={weatherLongitude}
        />
      :
      <WeatherAddLocalizationCard />
      }
    </section>
  )
}

const mapStateToProps = store => {
  return { 
    localization: store.activeUser.localization,
    latitude: store.activeUser.latitude,
    longitude: store.activeUser.longitude,
    weatherLatitude: store.activeUser.weather.displayedLocalization.latitude,
    weatherLongitude: store.activeUser.weather.displayedLocalization.longitude,
    city: store.activeUser.city,
    country: store.activeUser.country
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addWeatherLocalization: (latitude, longitude, city, country) => dispatch({type: ADD_WEATHER_LOCALIZATION, payload: {latitude, longitude, city, country}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);