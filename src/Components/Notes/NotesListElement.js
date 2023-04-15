import React from 'react';
import { connect } from "react-redux";

const NotesListElement = ({title, date, id, activeNote}) => {
  return (
    <div className='notes-list-element'>
        <div className='notes-list-element__text-container'>
            <h5 className='note-title'>{title}</h5>
            <p className='note-date'>{date}</p>
        </div>
        <button></button>
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

    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(NotesListElement);