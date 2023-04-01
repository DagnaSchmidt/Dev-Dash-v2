import React from 'react';
import '../Styles/Components_Styles/BottomBar.css';
import { IoApps, IoPerson } from "react-icons/io5";
import { connect } from "react-redux";
import { CLOSE_WIDGET } from '../actions';

const BottomBar = ( { closeWidget } ) => {
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
      <div className='bottom-bar__widget'>
        widget
      </div>
      <div className='bottom-bar__navigation'>
        nav
      </div>
    </footer>
  )
}

const mapStateToProps = store => {
  return { userName: store.activeUser.userName };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    closeWidget: () => dispatch({type: CLOSE_WIDGET})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);