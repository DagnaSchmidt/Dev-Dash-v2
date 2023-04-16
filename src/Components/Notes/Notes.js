import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { IoAdd, IoChevronUp, IoChevronDown, IoTrash } from "react-icons/io5";
import { connect } from "react-redux";
import { CREATE_NEW_NOTE } from '../../actions';
import NotesListElement from './NotesListElement';

const Notes = ( {activeNote, allNotes, createNewNote} ) => {
  // const [activeNoteLength, setActiveNoteLength] = useState();

  // useEffect(() =>{
  //   const newActiveNoteLength = Object.keys(activeNote).length;
  //   setActiveNoteLength(newActiveNoteLength);
  // }, [activeNote])
  

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
          <h3 className='notes__right__title headline-medium'>{activeNote.title ? activeNote.title : 'Your title...'}</h3>
          <p className='notes__right__content '>{activeNote.content ? activeNote.content : 'Your note...'}</p>
          <div className='notes__left__nav'>
            <div className='notes__left__nav__scroll-btns'>
              <button className='scroll-btn'>
                <IoChevronDown />
              </button>
              <button className='scroll-btn'>
                <IoChevronUp />
              </button>
            </div>
            <button className='icon-36'>
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
    createNewNote: () => dispatch({type: CREATE_NEW_NOTE})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);