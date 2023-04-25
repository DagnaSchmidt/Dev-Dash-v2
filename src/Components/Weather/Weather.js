import React from 'react';
import { connect } from "react-redux";
import { EDIT_NOTE } from '../../actions';
import '../../Styles/Components_Styles/Weather/Weather.css';
import WeatherForecastCards from './WeatherForecastCards';
import WeatherAddLocalizationCard from './WeatherAddLocalizationCard';

const Weather = ({ localization, latitude, longitude }) => {
  return (
    <section className='weather'>
      {localization ?
        <WeatherForecastCards 
          latitude={latitude}
          longitude={longitude}
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
    longitude: store.activeUser.longitude
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editNote: (id, edit, changedText) => dispatch({type: EDIT_NOTE, payload: {id, edit, changedText}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);