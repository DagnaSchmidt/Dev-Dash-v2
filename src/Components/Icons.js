import React from 'react';
import { connect } from "react-redux";
import { IoCalculator, IoBeer ,  IoCopy, IoCalendar, IoBarbell, IoCaretForwardCircle, IoCellular, IoFastFood, IoLanguage, IoFilm, IoLibrary, IoDice, IoGameController, IoHeadset } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";
import '../Styles/Components_Styles/Icons.css';

const Icons = ( {activeWidget} ) => {

  const widgetsList = [
    ['calculator', <IoCalculator />, 'calculator'],
    ['notes', <IoCopy />, 'notes'],
    ['calendar', <IoCalendar />, 'calendar'],
    ['weather', <IoMdPartlySunny />, 'weather'],
    ['time tracker', <IoCaretForwardCircle />, 'timeTracker'],
    ['expenses', <IoCellular />, 'expenses'],
    ['calorie counter', <IoFastFood />, 'calorieCounter'],
    ['translator', <IoLanguage />, 'translator'],
    ['movies', <IoFilm />, 'movies'],
    ['books', <IoLibrary />, 'books'],
    ['board games', <IoDice />, 'boardGames'],
    ['music', <IoHeadset />, 'music'],
    ['video games', <IoGameController />, 'videoGames'],
    ['exercises', <IoBarbell />, 'exercises'],
    ['drink recipes', <IoBeer />, 'drinkRecipes']
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