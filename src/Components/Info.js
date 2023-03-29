import React from 'react';
import '../Styles/Components_Styles/Info.css';

const Info = () => {
  return (
    <header className='info'>
        <div className='info__top'>
          <p className='info__top__greeting'>
            Greeting hardcoded
          </p>
          <p className='info__top__username display-small'>
            Username hardcoded
          </p>
        </div>
        <div className='info__bottom'>

        </div>
    </header>
  )
}

export default Info;