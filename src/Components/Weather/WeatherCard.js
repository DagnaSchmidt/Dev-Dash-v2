import React from 'react';
import { connect } from 'react-redux';
import { WiDaySunny, WiNightClear } from "react-icons/wi";

const WeatherCard = ( {currentTemp, maxTemp, minTemp, sunrise, sunset, symbolPhrase, pressure, cloudiness, maxRelHumidity, minRelHumidity, maxWindSpeed, minWindSpeed, precipProb, precipAccum, uvIndex, date} ) => {
  return (
    <div className='weather-card' id={date}>
        <div className='weather-card__top'>
            <div className='weather-card__top__current-temp display-large'>{currentTemp}<span>o</span></div>
            <div className='weather-card__top__card'>
                <div className='weather-card__top__card__text'>
                    <p className='subtitle-medium'>{maxTemp}<span>o</span></p>
                    <p className='body-large'>day</p>
                </div>
                <div className='weather-card__top__card__text'>
                    <p className='subtitle-medium'>{minTemp}<span>o</span></p>
                    <p className='body-large'>night</p>
                </div>
            </div>
            <div className='weather-card__top__card'>
                <div className='weather-card__top__card__text'>
                    <WiDaySunny />
                    <p className='subtitle-medium'>{sunrise.slice(0,5)}</p>
                </div>
                <div className='weather-card__top__card__text'>
                    <WiNightClear />
                    <p className='subtitle-medium'>{sunset.slice(0,5)}</p>
                </div>
            </div>
            <div className='weather-card__top__symbol'>
                <WiNightClear />
                <p className='body-medium'>{symbolPhrase}</p>
            </div>
        </div>
        <div className='weather-card__bottom'>
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
                    <p className='subtitle-medium'>precipitation chance</p>
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
        displayedDay: store.activeUser.weather.displayedDay
    };
  };

export default connect(mapStateToProps)(WeatherCard);