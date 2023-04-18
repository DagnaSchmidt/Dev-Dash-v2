import React from 'react';
import { connect } from "react-redux";
import { IoCalculator, IoBeer ,  IoCopy, IoCalendar, IoBarbell, IoCaretForwardCircle, IoCellular, IoFastFood, IoLanguage, IoFilm, IoLibrary, IoDice, IoGameController, IoHeadset } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import '../Styles/Components_Styles/Icons.css';
import { CHANGE_ACTIVE_WIDGET } from '../actions';
import { Link } from 'react-router-dom';

const Icons = ( {activeWidget, changeWidget} ) => {

  const widgetsList = [
    ['calculator', <IoCalculator />, ''],
    ['notes', <IoCopy />, 'notes', '#C00A5A'],
    ['calendar', <IoCalendar />, ''],
    ['weather', <IoMdPartlySunny />, 'weather'],
    ['time tracker', <IoCaretForwardCircle />, ''],
    ['expenses', <IoCellular />, ''],
    ['calorie counter', <IoFastFood />, ''],
    ['translator', <IoLanguage />, ''],
    ['movies', <IoFilm />, ''],
    ['books', <IoLibrary />, ''],
    ['board games', <IoDice />, ''],
    ['music', <IoHeadset />, ''],
    ['video games', <IoGameController />, ''],
    ['exercises', <IoBarbell />, ''],
    ['drink recipes', <IoBeer />, '']
  ]

  const allWidgets = widgetsList.map((item) => {
    return (
      <Link to={`/${item[2]}`} key={item[0]} className='icons__icon' style={{justifyContent: activeWidget !== 'none' && 'center', padding: activeWidget !== 'none' && '0'}} onClick={() => changeWidget(item[2], item[3])}>
          {item[1]}
          <p className='icons__icon__title headline-small' style={{display: activeWidget !== 'none' && 'none'}}>
            {item[0]}
          </p>
      </Link>
    )
  })

  return (
    <section className={`icons ${activeWidget === 'none' && 'icons-closed'}`}>
      <div className={`icons__container ${activeWidget !== 'none' && 'icons__container-open'}`} id='icons-container'>
        {allWidgets}
      </div>
    </section>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };
const mapDispatchToProps = dispatch => {
  return {
    changeWidget: (widget, color) => dispatch({type: CHANGE_ACTIVE_WIDGET, payload: {widget, color}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Icons);