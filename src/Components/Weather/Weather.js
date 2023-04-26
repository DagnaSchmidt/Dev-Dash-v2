import React from 'react';
import { connect } from "react-redux";
import '../../Styles/Components_Styles/Weather/Weather.css';
import WeatherForecastCards from './WeatherForecastCards';
import WeatherAddLocalizationCard from './WeatherAddLocalizationCard';

const Weather = ({ weatherLatitude, weatherLongitude }) => {
  
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
    weatherLatitude: store.activeUser.weather.displayedLocalization.latitude,
    weatherLongitude: store.activeUser.weather.displayedLocalization.longitude,
  };
};

export default connect(mapStateToProps)(Weather);