import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd, IoChevronUp, IoChevronDown } from "react-icons/io5";
import { connect } from "react-redux";
import { CREATE_NEW_NOTE } from '../../actions';
import NotesListElement from './NotesListElement';

const Notes = ( {activeNote, allNotes, createNewNote} ) => {
  let activeNoteLength = Object.keys(activeNote).length

  const notesList = allNotes.map((item) => {
    return (
      <NotesListElement
        key={item.id}
        title={item.title}
        date={item.date}
        id={item.id}
       />
    )
  })

  return (
    <section className='notes'>
      <div className='notes__left'>
        <div className='notes__left__list'>
          {allNotes.length === 0 ?
          <div></div>
          :
          notesList
          }
        </div>
        <div className='notes__left__nav' style={{opacity: activeNoteLength === 0 ? '0' : '1'}}> 
          <div className='notes__left__nav__scroll-btns'>
            <button className='scroll-btn' onClick={console.log(allNotes)}>
              <IoChevronDown />
            </button>
            <button className='scroll-btn'>
              <IoChevronUp />
            </button>
          </div>
          <button className='icon-36' onClick={() => createNewNote()}>
            <IoAdd />
          </button>
        </div>
      </div>
      <div className='notes__right'>

      </div>
    </section>
  )
}

const mapStateToProps = store => {
  return { 
    activeNote: store.activeUser.notes.activeNote,
    allNotes: store.activeUser.notes.allNotes 
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewNote: () => dispatch({type: CREATE_NEW_NOTE})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);