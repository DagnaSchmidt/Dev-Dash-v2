import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd, IoChevronUp, IoChevronDown } from "react-icons/io5";
import { connect } from "react-redux";

const Notes = ( {activeNote, allNotes} ) => {
  let activeNoteLength = Object.keys(activeNote).length

  return (
    <section className='notes'>
      <div className='notes__left'>
        <div className='notes__left__list'>

        </div>
        <div className='notes__left__nav' style={{opacity: activeNoteLength === 0 ? '0' : '1'}}> 
          <div className='notes__left__nav__scroll-btns'>
            <button className='scroll-btn'>
              <IoChevronDown />
            </button>
            <button className='scroll-btn'>
              <IoChevronUp />
            </button>
          </div>
          <button className='icon-36'>
            <IoAdd />
          </button>
        </div>
      </div>
      <div className='notes__right'>

      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return { 
    activeNote: state.activeUser.widgets.notes.activeNote,
    allNotes: state.activeUser.widgets.notes.allNotes 
  };
};
const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);