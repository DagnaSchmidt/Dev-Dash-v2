import React from 'react';
import { Route, Routes,  } from "react-router-dom";
import { connect } from "react-redux";
import Weather from './Components/Weather/Weather';
import Notes from './Components/Notes/Notes';

const Main = ( {activeWidget, blackTheme } ) => {
  return (
    <>
    {activeWidget !== 'none' &&
        <main className='main' style={{backgroundColor: !blackTheme && '#E7E7E7' }}>
            <Routes>
                <Route path='/' element={<Weather />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='/notes' element={<Notes />} />
            </Routes>
        </main>
    }
    </>
  )
}

const mapStateToProps = store => {
    return { 
      activeWidget: store.activeUser.activeWidget,
      blackTheme: store.activeUser.blackTheme
     };
  };

export default connect(mapStateToProps)(Main);