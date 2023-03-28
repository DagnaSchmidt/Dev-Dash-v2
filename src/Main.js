import React from 'react';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { connect } from "react-redux";
import Weather from './Components/Weather/Weather';

const Main = ( {activeWidget} ) => {
  return (
    <>
    {activeWidget !== 'none' &&
        <main className='main'>
            <BrowserRouter>
                <div>Main</div>
                <Routes>
                    <Route path='/' element={<Weather />} />
                </Routes>
            </BrowserRouter>
        </main>
    }
    </>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Main);