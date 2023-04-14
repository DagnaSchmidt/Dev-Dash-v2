import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd } from "react-icons/io5";
import { connect } from "react-redux";

const Notes = ( {activeNote, allNotes} ) => {
  return (
    <section className='notes'>
      <div className='notes__left'>
        <div className='notes__left__list'>

        </div>
        <div className='notes__left__nav'> 
          <div className='notes__left__nav__scroll-btns'>

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