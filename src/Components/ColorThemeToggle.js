import React from 'react';
import { connect } from "react-redux";
import { TOGGLE_COLOR_THEME, TOGGLE_COLOR_THEME_BLACK } from '../actions';

const ColorThemeToggle = ( {activeWidgetColor, blackTheme, colorTheme, colorThemeBlack} ) => {
  return (
    <div className='color-theme-toggle'>
        <div className='color-theme-toggle__btns'>
            <div className='bg' style={{left: blackTheme ? '0' : '36px'}}></div>
            <div className={`black ${blackTheme && 'active'}`} onClick={() => colorThemeBlack()}>
                <div className='dot'></div>
            </div>
            <div className={`color ${!blackTheme && 'active'}`} onClick={() => colorTheme()}>
                <div className='dot' style={{backgroundColor: activeWidgetColor}}></div>
            </div>
        </div>
        <p className='color-theme-toggle__title'>
            color theme
        </p>
    </div>
  )
}

const mapStateToProps = store => {
    return {  
      activeWidgetColor: store.activeUser.activeWidgetColor,
      blackTheme: store.activeUser.blackTheme
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { 
      colorThemeBlack: () => dispatch({type: TOGGLE_COLOR_THEME_BLACK}),
      colorTheme: () => dispatch({type: TOGGLE_COLOR_THEME})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ColorThemeToggle);