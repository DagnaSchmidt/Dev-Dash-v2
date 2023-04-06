import React, {useState} from 'react';
import '../Styles/Components_Styles/BottomBar.css';
import { IoApps, IoPerson, IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { CLOSE_WIDGET } from '../actions';
import ColorThemeToggle from './ColorThemeToggle';

//change display of widget_title !!!

const BottomBar = ( { closeWidget, activeWidget } ) => {
  const [scroll, setScroll] = useState('left');
  const element = document.getElementById('icons-container');
  console.log(element)

  const scrollLeft = () => {
    setScroll('left');
    element.scrollTo({
      left: 0,
      behavior: "smooth",
    });;
  }

  const scrollRight = () => {
    setScroll('right');
    element.scrollTo({
      left: 1000,
      behavior: "smooth",
    });;
  }

  return (
    <footer className='bottom-bar'>
      <div className='bottom-bar__icons'>
        <button className='icon-48' onClick={() => closeWidget()}>
          <IoApps />
        </button>
        <button className='icon-48'>
          <IoPerson />
        </button>
      </div>
      {activeWidget !== 'none' && 
        <div className='bottom-bar__widget'>
          <h5 className='bottom-bar__widget__title title-large'>{activeWidget}</h5> 
          <ColorThemeToggle />
        </div>
      }
      <div className='bottom-bar__navigation'>
        <div className='bottom-bar__navigation__btns'>
          {scroll === 'left' ?
            <button className='bottom-bar__navigation__btns__btn' onClick={() => scrollRight()}>
              <IoChevronForwardOutline />
            </button>
          :
            <button className='bottom-bar__navigation__btns__btn' onClick={() => scrollLeft()}>
              <IoChevronBack />
            </button>
          }
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = store => {
  return { 
    userName: store.activeUser.userName, 
    activeWidget: store.activeUser.activeWidget
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    closeWidget: () => dispatch({type: CLOSE_WIDGET})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);