import React from 'react';
import { connect } from 'react-redux';
import { SET_DISPLAYED_DAY } from '../../actions';

const WeatherNavBtn = ( {date, maxTemp, minTemp, displayedDay, setDisplayedDay, blackTheme} ) => {
    const weekday = ["Sun", "Mon","Tue","Wed","Thur","Fri","Sat"];
    const day = new Date(date).getDay();
  return (
    <div className={`weather-nav-btn ${displayedDay === date ? blackTheme ? 'active-btn-black' : 'active-btn-color' : blackTheme ? 'inactive-btn-black' : 'inactive-btn-color'}`}  onClick={() => setDisplayedDay(date)}>
        <h5 className='title-medium '>{weekday[day]}</h5>
        <p className='body-medium'>{maxTemp}<span>o</span> / {minTemp}<span>o</span></p>
    </div>
  )
}


const mapStateToProps = store => {
    return { 
        displayedDay: store.activeUser.weather.displayedDay,
        blackTheme: store.activeUser.blackTheme
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        setDisplayedDay: (newDisplayedDay) => dispatch({type: SET_DISPLAYED_DAY, payload: { newDisplayedDay }})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNavBtn);