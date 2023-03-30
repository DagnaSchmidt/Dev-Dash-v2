import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/Components_Styles/Info.css';

const Info = () => {
  const [greeting, setGreeting] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();


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

useEffect(() => {
    checkTime();
    checkDay();
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
              Gothenburg, Sweden
            </p>
            <p className='info__bottom__clock display-small'>
              {hour.toString().length === 1 ? `0${hour}` : hour}:{minutes.toString().length === 1 ? `0${minutes}` : minutes}
            </p>
          </div>
        </div>
    </header>
  )
}

export default Info;