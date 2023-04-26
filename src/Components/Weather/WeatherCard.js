import React from 'react';
import { connect } from 'react-redux';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiShowers, WiRain, WiCloudy, WiSnow } from "react-icons/wi";

const WeatherCard = ( {currentTemp, maxTemp, minTemp, sunrise, sunset, symbolPhrase, pressure, cloudiness, maxRelHumidity, minRelHumidity, maxWindSpeed, minWindSpeed, precipProb, precipAccum, uvIndex, date, displayedDay, activeWidgetColor, blackTheme} ) => {
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
        }
        return (
            <WiDaySunny />
        )
    }
    const icon = setIcon(symbolPhrase);
  return (
    <div className='weather-card' id={date} style={{opacity: displayedDay === date ? '1' : '0'}}>
        <div className='weather-card__top'>
            <div className='weather-card__top__current-temp' style={{backgroundColor: blackTheme ? '#E7E7E7' : activeWidgetColor, color: blackTheme ? '#1E1E1E' : '#E7E7E7'}}>
                <p className='display-large'>{currentTemp}<span style={{fontWeight: '400'}}>o</span></p>
            </div>
            <div className='weather-card__top__card' style={{color: blackTheme ? '#E7E7E7' : activeWidgetColor}}>
                <div className='weather-card__top__card__text'>
                    <p className='subtitle-medium'>{maxTemp}<span>o</span></p>
                    <p className='body-large'>day</p>
                </div>
                <div className='weather-card__top__card__text'>
                    <p className='subtitle-medium'>{minTemp}<span>o</span></p>
                    <p className='body-large'>night</p>
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
        blackTheme: store.activeUser.blackTheme
    };
  };

export default connect(mapStateToProps)(WeatherCard);