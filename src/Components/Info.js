import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import '../Styles/Components_Styles/Info.css';
const KEY = process.env.REACT_APP_GEODB_KEY


const Info = ( {userName} ) => {
  const [greeting, setGreeting] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  // think about user name !!!!! 


  function checkTime(){
    if(hour < 12){
      setGreeting("Good morning")
    }else if(hour < 18){
      setGreeting("Good afternoon")
    }else{
      setGreeting("Good evening")
    }
  }

  function checkDay(){
    if(day === 1){
      setCurrentDay('Monday')
    }else if(day === 2){
      setCurrentDay('Tuesday')
    }else if(day === 3){
      setCurrentDay('Wednesday')
    }else if(day === 4){
      setCurrentDay('Thursday')
    }else if(day === 5){
      setCurrentDay('Friday')
    }else if(day === 6){
      setCurrentDay('Saturday')
    }else{
      setCurrentDay('Sunday')
    }
  }

  function checkLocalization(){
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(localizationAccepted, localizationDenied);
    } else {
      setCity('denied');
      setCountry('denied');
    }
  }

  //  think about not fetching every time page reloads!
  // check with console.logs when data is fetched!

  function localizationAccepted(position){
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    const geodb = {
      method: 'GET',
      params: {types: 'CITY', location: `+${latitude}+${longitude}`, minPopulation: '10000'},
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    axios.request(geodb).then(function (response) {
      const json = response.data.data[0];
      setCity(json.city);
      setCountry(json.country);
    }).catch(function (error) {
      setCity('denied');
      setCountry('denied');
    });
  }

  function localizationDenied(error){
    setCity('denied');
    setCountry('denied');
    //add to store that localization: 'denied'
  }

useEffect(() => {
    checkTime();
    checkDay();
    checkLocalization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='info'>
        <div className='info__top'>
          <p className='info__top__greeting title-large'>
            {greeting}
          </p>
          <p className='info__top__username display-small'>
            Dagna
          </p>
        </div>
        <div className='info__bottom'>
          <div className='info__bottom__day'>
            <p className='info__bottom__day-name title-medium'>
              {currentDay}
            </p>
            <p className='info__bottom__date body-large'>
              {date} / {month +1} / {year}
            </p>
          </div>
          <div className='info__bottom__localization'>
            <p className='info__bottom__city body-large'>
              {city !== 'denied' && `${city}, ${country}`}
            </p>
            <p className='info__bottom__clock display-small'>
              {hour.toString().length === 1 ? `0${hour}` : hour}:{minutes.toString().length === 1 ? `0${minutes}` : minutes}
            </p>
          </div>
        </div>
    </header>
  )
}

const mapStateToProps = state => {
  return { userName: state.activeUser.userName };
};

export default connect(mapStateToProps)(Info);