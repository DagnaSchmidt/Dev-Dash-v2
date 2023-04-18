import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd, IoChevronUp, IoChevronDown, IoTrash } from "react-icons/io5";
import { connect } from "react-redux";
import { CREATE_NEW_NOTE, DELETE_NOTE, EDIT_NOTE } from '../../actions';
import NotesListElement from './NotesListElement';

const Notes = ( {activeNote, allNotes, createNewNote, deleteNote, editNote} ) => {

  const notesList = allNotes.map((item) => {
    return (
      <NotesListElement
        key={item.id}
        title={item.title}
        date={item.date}
        id={item.id}
        content={item.content}
       />
    )
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {value, id} = e.target;
    if(id === 'noteTitle'){
      editNote(activeNote.id, 'noteTitle', value)
    }else{
      editNote(activeNote.id, 'noteContent', value)
    }
  }

  //FIX EDIT NOTE WHEN INPUT IS EMPTY!!!
  //FIX NAV BTNS opacity when scrolling note content

  return (
    <section className='notes'>
      <div className='notes__left'>
        <div className='notes__left__list'>
          {allNotes.length === 0 ?
            <div className='notes__left__list__empty'>
                <h5 className='subtitle-medium'>Nothing here!</h5>
                <button className='primary-button-with-icon' onClick={() => createNewNote()}>
                  <IoAdd />
                  <p className='primary-button-with-icon__title'>create first note</p>
                </button>
            </div>
          :
          notesList
          }
        </div>
        <div className='notes__left__nav' style={{opacity: allNotes.length === 0 ? '0' : '1'}}> 
          <div className='notes__left__nav__scroll-btns' style={{opacity: allNotes.length > 5 ? '1' : '0'}}>
            <button className='scroll-btn' onClick={console.log(allNotes, activeNote)}>
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
      <div className='notes__right' style={{opacity: Object.keys(activeNote).length === 0 ? '.2' : '1'}}>
          {activeNote.title ? 
            <input 
              type='text'
              className='notes__right__title headline-medium' 
              id='noteTitle'
              name='noteTitle'
              value={activeNote.title}
              onChange={handleChange}
              autoComplete='off'
            />
          : 
            <h3 className='notes__right__title headline-medium'>Your title...</h3>
          }
          {activeNote.content ? 
            <textarea 
              type='text'
              className='notes__right__content' 
              id='noteContent'
              name='noteContent'
              value={activeNote.content}
              onChange={handleChange}
              autoComplete='off'
            /> 
          : 
            <p className='notes__right__content'>Your note...</p>
          }

          <div className='notes__left__nav' style={{opacity: Object.keys(activeNote).length === 0 ? '0' : '1'}}>
            <div className='notes__left__nav__scroll-btns'>
              <button className='scroll-btn'>
                <IoChevronDown />
              </button>
              <button className='scroll-btn'>
                <IoChevronUp />
              </button>
            </div>
            <button className='icon-36' onClick={() => deleteNote(activeNote.id)}>
              <IoTrash />
            </button>
          </div>
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
    createNewNote: () => dispatch({type: CREATE_NEW_NOTE}),
    deleteNote: (id) => dispatch({type: DELETE_NOTE, payload: {id}}),
    editNote: (id, edit, changedText) => dispatch({type: EDIT_NOTE, payload: {id, edit, changedText}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);