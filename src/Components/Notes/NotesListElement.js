import React from 'react';
import { connect } from "react-redux";
import { IoChevronForward } from "react-icons/io5";
import { DISPLAY_ACTIVE_NOTE } from '../../actions';

const NotesListElement = ({title, date, id, content, activeNote, displayActiveNote, setMobileDisplayActiveNote}) => {
    const noteDetails = {
        id: id,
        date: date,
        title: title,
        content: content
    }
    let titleLength = title.length;

  return (
    <div onClick={() => {displayActiveNote(noteDetails); setMobileDisplayActiveNote(true)}} className='notes-list-element' style={{opacity: id === activeNote.id ? '1' : '.6', paddingLeft: id === activeNote.id ? '12px' : '0', borderBottomWidth: id === activeNote.id ? '3px' : '1px'}}>
        <div className='notes-list-element__text-container'>
            <h5 className='body-large'>{titleLength < 12 ? title : `${title.slice(0, 12)}...`}</h5>
            <p className='label-medium'>{date}</p>
        </div>
        <button className='notes-list-element__btn' style={{opacity: id === activeNote.id && '0'}}>
            <IoChevronForward />
        </button>
    </div>
  )
}

const mapStateToProps = store => {
    return { 
      activeNote: store.activeUser.notes.activeNote
    };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        displayActiveNote: (newActiveNote) => dispatch({type: DISPLAY_ACTIVE_NOTE, payload: {newActiveNote}})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(NotesListElement);