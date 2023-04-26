import React from 'react';
import { connect } from "react-redux";
import '../../Styles/Components_Styles/Weather/Weather.css';
import WeatherForecastCards from './WeatherForecastCards';
import WeatherSavedLocalizationsCard from './WeatherSavedLocalizationsCard';
import WeatherAddLocalizationCard from './WeatherAddLocalizationCard';

const Weather = ({ weatherLatitude, weatherLongitude, openSavedLocalizations }) => {
  
  return (
    <section className='weather'>
      {weatherLatitude ?
        <WeatherForecastCards 
          latitude={weatherLatitude}
          longitude={weatherLongitude}
        />
      : openSavedLocalizations ?
          <WeatherSavedLocalizationsCard />
        :
          <WeatherAddLocalizationCard />
      }
    </section>
  )
}

const mapStateToProps = store => {
  return { 
    weatherLatitude: store.activeUser.weather.displayedLocalization.latitude,
    weatherLongitude: store.activeUser.weather.displayedLocalization.longitude,
    openSavedLocalizations: store.activeUser.weather.openSavedLocalizations
  };
};

export default connect(mapStateToProps)(Weather);