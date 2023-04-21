import React from 'react';
import { connect } from "react-redux";
import { EDIT_NOTE } from '../../actions';
import WeatherForecastCards from './WeatherForecastCards';

const Weather = ({ localization, latitude, longitude }) => {
  return (
    <section className='weather'>
      {localization ?
        <WeatherForecastCards 
          latitude={latitude}
          longitude={longitude}
        />
      :
      <div>
        denied
      </div>
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