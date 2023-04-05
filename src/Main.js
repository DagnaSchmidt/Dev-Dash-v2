import React from 'react';
import { Route, Routes,  } from "react-router-dom";
import { connect } from "react-redux";
import Weather from './Components/Weather/Weather';
import Notes from './Components/Notes/Notes';

const Main = ( {activeWidget} ) => {
  return (
    <>
    {activeWidget !== 'none' &&
        <main className='main'>
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

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Main);