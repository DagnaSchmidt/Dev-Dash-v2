import React from 'react';
import { connect } from "react-redux";
import { IoCalculator, IoCopy, IoCalendar, IoBarbell, IoCaretForwardCircle, IoCellular, IoFastFood, IoLanguage, IoFilm, IoLibrary, IoDice, IoGameController, IoHeadset } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import '../Styles/Components_Styles/Icons.css';

const Icons = ( {activeWidget} ) => {

  const allWidgets = [
    ['calculator', 'IoCalculator'],
    ['notes', 'IoCopy'],
    ['calendar', 'IoCalendar'],
    ['weather', 'IoMdPartlySunny'],
    ['time tracker', 'IoCaretForwardCircle'],
    ['expenses', 'IoCellular'],
    ['calorie counter', 'IoFastFood'],
    ['translator', 'IoLanguage'],
    ['movies', 'IoFilm'],
    ['books', 'IoLibrary'],
    ['board games', 'IoDice'],
    ['music', 'IoHeadset'],
    ['video games', 'IoGameController'],
    ['exercises', 'IoBarbell'],
    ['drink recipes', 'IoBeer']
  ]

  return (
    <section className={`icons ${activeWidget === 'none' && 'icons-closed'}`}>
        Icons
    </section>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Icons);