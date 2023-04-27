import React from 'react';
import { connect } from 'react-redux';
import { CHOOSE_WEATHER_DISPLAYED_LOCALIZATION, DELETE_WEATHER_LOCALIZATION } from '../../actions';
import { IoTrash } from "react-icons/io5";

const WeatherSavedLocalizationsCard = ({ savedLocalizations, chooseWeatherLocalization, deleteLocalization }) => {
    console.log(savedLocalizations);
  return (
    <div className='weather__saved-localizations'>
        <h5 className='title-large'>List of your localizations:</h5>
        <p className='body-medium'>You can save maximum of 13 localizations.</p>
        <div className='weather__saved-localizations__btns'>
            {savedLocalizations.length !== 0 &&
                savedLocalizations.map((item) => {
                    return (
                        <div key={item.date} className='weather__saved-localizations__btn'>
                            <button className='weather__saved-localizations__btn__choose' onClick={() => chooseWeatherLocalization(item.latitude, item.longitude, item.city, item.country)}>
                                <p className='body-medium'>{item.city}</p>
                                <p className='label-medium'>{item.country}</p>
                            </button>
                            <button className='weather__saved-localizations__btn__delete' onClick={() => deleteLocalization(item.latitude, item.longitude)}>
                                <IoTrash />
                            </button>
                        </div>
                        
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
      chooseWeatherLocalization: (latitude, longitude, city, country) => dispatch({type: CHOOSE_WEATHER_DISPLAYED_LOCALIZATION, payload: {latitude, longitude, city, country}}),
      deleteLocalization: (latitude, longitude) => dispatch({type: DELETE_WEATHER_LOCALIZATION, payload: {latitude, longitude}}) 
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(WeatherSavedLocalizationsCard);