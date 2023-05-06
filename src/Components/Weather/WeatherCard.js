import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CLEAR_WEATHER_DISPLAYED_LOCALIZATION, OPEN_WEATHER_SAVED_LOCALIZATIONS } from '../../actions';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiShowers, WiRain, WiCloudy, WiSnow, WiThunderstorm, WiDaySnow } from "react-icons/wi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const WeatherCard = ( {currentTemp, maxTemp, minTemp, sunrise, sunset, symbolPhrase, pressure, cloudiness, maxRelHumidity, minRelHumidity, maxWindSpeed, minWindSpeed, precipProb, precipAccum, uvIndex, date, displayedDay, activeWidgetColor, blackTheme, city, country, savedLocalizations, clearDisplayedLocalization, openSavedLocalizations} ) => {

    let todaysDate = new Date().getDate().toString();
    if(todaysDate.length === 1){
        todaysDate = "0" + todaysDate;
    }

    const setIcon = (symbolPhrase) => {
        if(symbolPhrase === 'mostly clear' || symbolPhrase === 'partly cloudy'){
            return (
                <WiDayCloudy />
            )
        }else if(symbolPhrase === 'showers' || symbolPhrase === 'light rain'){
            return (
                <WiShowers />
            )
        }else if(symbolPhrase === 'rain'){
            return (
                <WiRain />
            )
        }else if(symbolPhrase === 'clear'){
            return (
                <WiDaySunny />
            )
        }else if(symbolPhrase === 'overcast' || symbolPhrase === 'cloudy'){
            return (
                <WiCloudy />
            )
        }else if(symbolPhrase === 'snow'){
            return (
                <WiSnow />
            )
        }else if(symbolPhrase === 'thunderstorms'){
            return (
                <WiThunderstorm />
            )
        }else if(symbolPhrase === 'snow showers'){
            return (
                <WiDaySnow />
            )
        }
        return (
            <WiDaySunny />
        )
    }
    const icon = setIcon(symbolPhrase);

    const weekday = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
    const day = new Date(date).getDay();

    const [visibleOptions, setVisibleOptions] = useState(false);

  return (
    <div className='weather-card' id={date} style={{opacity: displayedDay === date ? '1' : '0'}}>
        <div className='weather-card__top'>
            <div className='weather-card__top__current-temp' style={{backgroundColor: blackTheme ? '#E7E7E7' : activeWidgetColor, color: blackTheme ? '#1E1E1E' : '#E7E7E7'}}>
                {date.slice(-2) === todaysDate ? 
                    <p className='weather-card__top__current-temp__current display-large'>{currentTemp}°</p>
                :
                    <p className='title-medium weather-card__top__current-temp__weekday'>{weekday[day]}</p>
                }
                <p className='weather-card__top__current-temp__divider display-large' style={{fontWeight: '300'}}>|</p>
                <div className='weather-card__top__current-temp__min-max'>
                    <p className='title-medium'>{maxTemp}°</p>
                    <p className='subtitle-medium'>{minTemp}°</p>
                </div>
            </div>
            <div className='weather-card__top__localization' onClick={() => setVisibleOptions(!visibleOptions)} style={{color: blackTheme ? '#E7E7E7' : activeWidgetColor, borderColor: !blackTheme && activeWidgetColor, backgroundColor: visibleOptions && '#AFAFAF10', borderRadius: visibleOptions && '8px', borderStyle: visibleOptions && 'solid'}}>
                <div className='weather-card__top__localization__text'>
                    <p className='title-medium'>{city}</p>
                    <p className='body-large'>{country}</p>
                </div>
                <div className='weather-card__top__localization__icon' style={{opacity: visibleOptions && '1'}}>
                    {visibleOptions ? 
                        <IoChevronUp />
                    :
                        <IoChevronDown />
                    }
                </div>
                    {/* SOMETHING WRONG HERE IN STYLES (border color) CHECK LATER */}
                <div className='weather-card__top__localization__options' style={{bottom: !visibleOptions && '-10%', height: !visibleOptions && '0', borderWidth: !visibleOptions && '0', backgroundColor: !blackTheme && '#E7E7E7', borderColor: !blackTheme && activeWidgetColor}}> 
                    <button className='body-medium weather-card__top__localization__options__btn' style={{display: savedLocalizations.length <= 1 && 'none', borderBottomColor: !blackTheme && activeWidgetColor}} onClick={() => openSavedLocalizations()}>change city</button>
                    <button className='body-medium weather-card__top__localization__options__btn' style={{display: savedLocalizations.length >= '12' && 'none'}} onClick={() => clearDisplayedLocalization()}>add city</button>
                </div>
            </div>
            <div className='weather-card__top__card' style={{color: blackTheme ? '#E7E7E7' : activeWidgetColor}}>
                <div className='weather-card__top__card__text'>
                    <WiDaySunny />
                    <p className='subtitle-medium'>{sunrise.slice(0,5)}</p>
                </div>
                <div className='weather-card__top__card__text'>
                    <WiNightClear />
                    <p className='subtitle-medium'>{sunset.slice(0,5)}</p>
                </div>
            </div>
            <div className='weather-card__top__symbol' style={{backgroundColor: blackTheme ? '#E7E7E7' : activeWidgetColor, color: blackTheme ? '#1E1E1E' : '#E7E7E7'}}>
                {icon}
                <p className='body-medium'>{symbolPhrase}</p>
            </div>
        </div>
        <div className='weather-card__bottom' style={{color: blackTheme ? '#E7E7E7' : activeWidgetColor}}>
            <div className='weather-card__bottom__left'>
                <div className='weather-card__bottom__info'>
                    <h5 className='title-medium'>{pressure} mb</h5>
                    <p className='subtitle-medium'>pressure</p>
                    <h5 className='title-medium'>{cloudiness} %</h5>
                    <p className='subtitle-medium'>cloudiness</p>
                </div>
                <div className='weather-card__bottom__info'>
                    <h5 className='title-medium'>{maxRelHumidity} %</h5>
                    <p className='subtitle-medium'>max humidity</p>
                    <h5 className='title-medium'>{minRelHumidity} %</h5>
                    <p className='subtitle-medium'>min humidity</p>
                </div>
                <div className='weather-card__bottom__info'>
                    <h5 className='title-medium'>{precipProb} %</h5>
                    <p className='subtitle-medium'>precip. chance</p>
                    <h5 className='title-medium'>{precipAccum} mm</h5>
                    <p className='subtitle-medium'>precipitation</p>
                </div>
            </div>
            <div className='weather-card__bottom__right'>
                <div className='weather-card__bottom__info'>
                </div>
                <div className='weather-card__bottom__info'>
                    <h5 className='title-medium'>{maxWindSpeed} km/h</h5>
                    <p className='subtitle-medium'>max wind</p>
                    <h5 className='title-medium'>{minWindSpeed} km/h</h5>
                    <p className='subtitle-medium'>min wind</p>
                </div>
                <div className='weather-card__bottom__info'>
                    <h5 className='title-medium'>{uvIndex}</h5>
                    <p className='subtitle-medium'>uv index</p>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = store => {
    return { 
        displayedDay: store.activeUser.weather.displayedDay,
        activeWidgetColor: store.activeUser.activeWidgetColor,
        blackTheme: store.activeUser.blackTheme,
        city: store.activeUser.weather.displayedLocalization.city,
        country: store.activeUser.weather.displayedLocalization.country,
        savedLocalizations: store.activeUser.weather.savedLocalizations
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        clearDisplayedLocalization: () => dispatch({type: CLEAR_WEATHER_DISPLAYED_LOCALIZATION}),
        openSavedLocalizations: () => dispatch({type: OPEN_WEATHER_SAVED_LOCALIZATIONS})
    };
    }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);