import React from 'react';
import { connect } from "react-redux";
import { IoCalculator, IoBeer ,  IoCopy, IoCalendar, IoBarbell, IoCaretForwardCircle, IoCellular, IoFastFood, IoLanguage, IoFilm, IoLibrary, IoDice, IoGameController, IoHeadset } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import '../Styles/Components_Styles/Icons.css';

const Icons = ( {activeWidget} ) => {

  const widgetsList = [
    ['calculator', <IoCalculator />],
    ['notes', <IoCopy />],
    ['calendar', <IoCalendar />],
    ['weather', <IoMdPartlySunny />],
    ['time tracker', <IoCaretForwardCircle />],
    ['expenses', <IoCellular />],
    ['calorie counter', <IoFastFood />],
    ['translator', <IoLanguage />],
    ['movies', <IoFilm />],
    ['books', <IoLibrary />],
    ['board games', <IoDice />],
    ['music', <IoHeadset />],
    ['video games', <IoGameController />],
    ['exercises', <IoBarbell />],
    ['drink recipes', <IoBeer />]
  ]

  const allWidgets = widgetsList.map((item) => {
    return (
      <div key={item[0]} className='icons__icon' style={{justifyContent: activeWidget !== 'none' && 'center'}}>
        {item[1]}
        <p className='icons__icon__title headline-small' style={{display: activeWidget !== 'none' && 'none'}}>
          {item[0]}
        </p>
      </div>
    )
  })

  return (
    <section className={`icons ${activeWidget === 'none' && 'icons-closed'}`}>
        {allWidgets}
    </section>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Icons);