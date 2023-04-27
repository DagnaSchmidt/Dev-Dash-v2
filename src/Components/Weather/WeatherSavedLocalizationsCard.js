import React from 'react';
import { connect } from 'react-redux';
import { ADD_WEATHER_LOCALIZATION } from '../../actions';

const WeatherSavedLocalizationsCard = ({ savedLocalizations }) => {
    console.log(savedLocalizations);
  return (
    <div className='weather__saved-localizations'>
        <h5>List of your localizations:</h5>
        <p>You can save maximum of 13 localizations.</p>
        <div className='weather__saved-localizations__btns'>
            {savedLocalizations.length !== 0 &&
                savedLocalizations.map((item) => {
                    return (
                        <button key={item.date}>
                            {item.city}
                        </button>
                    )
                })
            }
        </div>
    </div>
  )
}

const mapStateToProps = store => {
    return { 
        savedLocalizations: store.activeUser.weather.savedLocalizations
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      addWeatherLocalization: (latitude, longitude, city, country) => dispatch({type: ADD_WEATHER_LOCALIZATION, payload: {latitude, longitude, city, country}})
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(WeatherSavedLocalizationsCard);