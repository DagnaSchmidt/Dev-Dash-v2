import React from 'react';
import { Route, Routes,  } from "react-router-dom";
import { connect } from "react-redux";
import Weather from './Components/Weather/Weather';

const Main = ( {activeWidget} ) => {
  return (
    <>
    {activeWidget !== 'none' &&
        <main className='main'>
          <div>Main</div>
          <Routes>
              <Route path='/' element={<Weather />} />
          </Routes>
        </main>
    }
    </>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Main);