import React from 'react';
import { connect } from "react-redux";
import { IoChevronForward } from "react-icons/io5";

const NotesListElement = ({title, date, id, activeNote}) => {
  return (
    <div className='notes-list-element'>
        <div className='notes-list-element__text-container'>
            <h5 className='body-large'>{title}</h5>
            <p className='label-medium'>{date}</p>
        </div>
        <button>
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

    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(NotesListElement);