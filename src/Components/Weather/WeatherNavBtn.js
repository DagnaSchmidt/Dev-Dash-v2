import React from 'react';
import { connect } from 'react-redux';
import { SET_DISPLAYED_DAY } from '../../actions';

const WeatherNavBtn = ( {date, maxTemp, minTemp, displayedDay, setDisplayedDay} ) => {
    const weekday = ["Sun", "Mon","Tue","Wed","Thur","Fri","Sat"];
    const day = new Date(date).getDay();
  return (
    <div className='weather-nav-btn' style={{backgroundColor: displayedDay === date ? '#E7E7E7' : 'transparent'}} onClick={() => setDisplayedDay(date)}>
        <h5 className='title-medium '>{weekday[day]}</h5>
        <p>{maxTemp}<span>o</span>/{minTemp}<span>o</span></p>
    </div>
  )
}


const mapStateToProps = store => {
    return { 
        displayedDay: store.activeUser.weather.displayedDay
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        setDisplayedDay: (newDisplayedDay) => dispatch({type: SET_DISPLAYED_DAY, payload: { newDisplayedDay }})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNavBtn);