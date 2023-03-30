import React from 'react';
import '../Styles/Components_Styles/Info.css';

const Info = () => {
  return (
    <header className='info'>
        <div className='info__top'>
          <p className='info__top__greeting title-large'>
            Good morning
          </p>
          <p className='info__top__username display-small'>
            Dagna
          </p>
        </div>
        <div className='info__bottom'>
          <div className='info__bottom__day'>
            <p className='info__bottom__day-name title-medium'>
              monday
            </p>
            <p className='info__bottom__date body-large'>
              10 / 12 / 2022
            </p>
          </div>
          <div className='info__bottom__localization'>
            <p className='info__bottom__city body-large'>
              Gothenburg <br/> Sweden
            </p>
            <p className='info__bottom__clock display-small'>
              12:30
            </p>
          </div>
        </div>
    </header>
  )
}

export default Info;