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
            <div className='weather-card__top__current-temp'>{currentTemp}</div>
            <div>
                <div>
                    <p>{maxTemp}</p>
                    <p>day</p>
                </div>
                <div>
                    <p>{minTemp}</p>
                    <p>night</p>
                </div>
            </div>
            <div>
                <div>
                    <WiDaySunny />
                    <p>{sunrise}</p>
                </div>
                <div>
                    <WiNightClear />
                    <p>{sunset}</p>
                </div>
            </div>
            <div>
                <WiNightClear />
                <p>{symbolPhrase}</p>
            </div>
        </div>
        WeatherCard {date}
    </div>
  )
}

export default WeatherCard;