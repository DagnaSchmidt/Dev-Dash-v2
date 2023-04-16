import React from 'react';
import { connect } from "react-redux";
import { IoChevronForward } from "react-icons/io5";
import { DISPLAY_ACTIVE_NOTE } from '../../actions';

const NotesListElement = ({title, date, id, content, activeNote, displayActiveNote}) => {
    const noteDetails = {
        id: id,
        date: date,
        title: title,
        content: content
    }
  return (
    <div onClick={() => displayActiveNote(noteDetails)} className='notes-list-element' style={{opacity: id === activeNote.id ? '1' : '.5', paddingLeft: id === activeNote.id ? '12px' : '0', borderBottomWidth: id === activeNote.id ? '3px' : '1px'}}>
        <div className='notes-list-element__text-container'>
            <h5 className='body-large'>{title}</h5>
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
        // changeUserName: (name) => dispatch({type: CHANGE_USERNAME, payload: {name: name}}),
        displayActiveNote: (newActiveNote) => dispatch({type: DISPLAY_ACTIVE_NOTE, payload: {newActiveNote}})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(NotesListElement);