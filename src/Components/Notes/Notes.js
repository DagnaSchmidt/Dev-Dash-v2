import React, { useState } from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd, IoChevronUp, IoChevronDown, IoTrash } from "react-icons/io5";
import { connect } from "react-redux";
import { CREATE_NEW_NOTE, DELETE_NOTE, EDIT_NOTE } from '../../actions';
import NotesListElement from './NotesListElement';

const Notes = ( {activeNote, allNotes, createNewNote, deleteNote, editNote, blackTheme, activeWidgetColor} ) => {

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

  const [scrollContent, setScrollContent] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const {value, id} = e.target;
    const element = document.getElementById('noteContent');
    if(id === 'noteTitle'){
      editNote(activeNote.id, 'noteTitle', value)
    }else{
      editNote(activeNote.id, 'noteContent', value)
    }
    if(element.scrollHeight > element.clientHeight){
      setScrollContent(true);
    }else{
      setScrollContent(false);
    }
  }

  const scrollDown = (item) => {
    const element = document.getElementById(item);
    element.scrollBy({
      top: 72,
      behavior: "smooth",
    });;
  }

  const scrollUp = (item) => {
    const element = document.getElementById(item);
    element.scrollBy({
      top: -72,
      behavior: "smooth",
    });;
  }

  //MAKE EVERYTHING RESPONSIVE

  return (
    <section className='notes'>
      <div className='notes__left'>
        <div className='notes__left__list' style={{backgroundColor: !blackTheme && activeWidgetColor}} id='scroll-notes' >
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
            <button className='scroll-btn' onClick={() => scrollDown('scroll-notes')} style={{color: !blackTheme && activeWidgetColor}}>
              <IoChevronDown />
            </button>
            <button className='scroll-btn' onClick={() => scrollUp('scroll-notes')} style={{color: !blackTheme && activeWidgetColor}}>
              <IoChevronUp />
            </button>
          </div>
          <button className='icon-36' onClick={() => createNewNote()} style={{color: !blackTheme && activeWidgetColor, borderColor: !blackTheme && activeWidgetColor}}>
            <IoAdd />
          </button>
        </div>
      </div>
      <div className='notes__right' style={{opacity: Object.keys(activeNote).length === 0 ? '.2' : '1', color: !blackTheme && activeWidgetColor}}>
          {Object.keys(activeNote).length !== 0 ? 
            <input 
              type='text'
              className='notes__right__title headline-medium'
              id='noteTitle'
              name='noteTitle'
              value={activeNote.title}
              onChange={handleChange}
              autoComplete='off'
              maxLength={20}
            />
          : 
            <h3 className='notes__right__title headline-medium'>Your title...</h3>
          }
          {Object.keys(activeNote).length !== 0 ? 
            <textarea 
              type='text'
              className='notes__right__content body-medium' 
              id='noteContent'
              name='noteContent'
              value={activeNote.content}
              onChange={handleChange}
              autoComplete='off'
              style={{borderColor: !blackTheme && activeWidgetColor}}
              wrap='off'
            /> 
          : 
            <p className='notes__right__content body-medium' style={{borderColor: !blackTheme && activeWidgetColor}}>Your note...</p>
          }
          <div className='notes__left__nav' style={{opacity: Object.keys(activeNote).length === 0 ? '0' : '1'}}>
            <div className='notes__left__nav__scroll-btns' style={{opacity: scrollContent ? '1' : '0'}}>
              <button className='scroll-btn' onClick={() => scrollDown('noteContent')} style={{color: !blackTheme && activeWidgetColor}}>
                <IoChevronDown />
              </button>
              <button className='scroll-btn' onClick={() => scrollUp('noteContent')} style={{color: !blackTheme && activeWidgetColor}}>
                <IoChevronUp />
              </button>
            </div>
            <button className='icon-36' onClick={() => deleteNote(activeNote.id)} style={{color: !blackTheme && activeWidgetColor, borderColor: !blackTheme && activeWidgetColor}}>
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
    allNotes: store.activeUser.notes.allNotes,
    blackTheme: store.activeUser.blackTheme,
    activeWidgetColor: store.activeUser.activeWidgetColor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createNewNote: () => dispatch({type: CREATE_NEW_NOTE}),
    deleteNote: (id) => dispatch({type: DELETE_NOTE, payload: {id}}),
    editNote: (id, edit, changedText) => dispatch({type: EDIT_NOTE, payload: {id, edit, changedText}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);