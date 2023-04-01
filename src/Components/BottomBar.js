import React from 'react';
import '../Styles/Components_Styles/BottomBar.css';
import { IoApps } from "react-icons/io5";

const BottomBar = () => {
  return (
    <footer className='bottom-bar'>
      <div className='bottom-bar__icons'>
        <button className='icon-48'>
          <IoApps />
        </button>
      </div>
      <div className='bottom-bar__widget'>
        widget
      </div>
      <div className='bottom-bar__navigation'>
        nav
      </div>
    </footer>
  )
}

export default BottomBar;