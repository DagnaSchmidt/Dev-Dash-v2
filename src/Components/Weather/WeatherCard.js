import React from 'react';
import { WiDaySunny, WiNightClear } from "react-icons/wi";

// maxTemp={item.maxTemp}
// minTemp={item.minTemp}
// sunrise={item.sunrise}
// sunset={item.sunset}
// symbolPhrase={item.symbolPhrase}
// pressure={item.pressure}
// cloudiness={item.cloudiness}
// maxRelHumidity={item.maxRelHumidity}
// minRelHumidity={item.minRelHumidity}
// maxWindSpeed={item.maxWindSpeed}
// minWindSpeed={item.minWindSpeed}
// precipProb={item.precipProb}
// precipAccum={item.precipAccum}
// uvIndex={item.uvIndex}
//.date !

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

        </div>
    </div>
  )
}

export default WeatherCard;