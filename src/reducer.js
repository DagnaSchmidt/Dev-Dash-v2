import {
    TOGGLE_COLOR_THEME_BLACK,
    TOGGLE_COLOR_THEME,
    CHANGE_USERNAME,
    UPDATE_LOCALIZATION,
    DENY_LOCALIZATION,
    CLOSE_WIDGET,
    CHANGE_ACTIVE_WIDGET,
    CREATE_NEW_NOTE,
    DELETE_NOTE,
    DISPLAY_ACTIVE_NOTE,
    EDIT_NOTE
} from './actions';
import { v4 as uuidv4 } from 'uuid';

export const initialStore = {
    isLoggedIn: false,
    activeUser: {
        userName: '',
        password: '',
        localization: '',
        city: '',
        country: '',
        blackTheme: true,
        openUserPanel: false,
        activeWidget: 'weather',
        activeWidgetColor: '#49DEB3',
        notes: {
            activeNote: {},
            allNotes: []
        },
    },
    users: [],
  };

  function reducer(state = initialStore, action) {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const fullDate = `${date}/${month +1}/${year}`

    if (action.type === TOGGLE_COLOR_THEME_BLACK){
        return { ...state, activeUser: { ...state.activeUser, blackTheme: true}};
    }else if(action.type === TOGGLE_COLOR_THEME){
        return { ...state, activeUser: { ...state.activeUser, blackTheme: false}};
    }else if(action.type === CHANGE_USERNAME){
        return {...state, activeUser: {...state.activeUser, userName: action.payload.name}};
    }else if(action.type === UPDATE_LOCALIZATION){
        return {...state, activeUser: {...state.activeUser, city: action.payload.city, country: action.payload.country, localization: true}}
    }else if(action.type === DENY_LOCALIZATION){
        return {...state, activeUser: {...state.activeUser, localization: false}}
    }else if(action.type === CLOSE_WIDGET){
        return {...state, activeUser: {...state.activeUser, activeWidget: 'none'}}
    }else if(action.type === CHANGE_ACTIVE_WIDGET){
        return {...state, activeUser: {...state.activeUser, activeWidget: action.payload.widget}}
    }else if(action.type === CREATE_NEW_NOTE){
        const newNote = {
                id: uuidv4(),
                date: fullDate,
                title: 'Your title',
                content: 'Your note'
            }
        if(state.activeUser.notes.allNotes.length === 0){
            return {
                ...state, 
                activeUser: {
                    ...state.activeUser, 
                    notes: { 
                        activeNote: newNote,
                        allNotes: [
                            newNote
                        ]
                    } 
                }
            }
        }else{
            return {
                ...state, 
                activeUser: {
                    ...state.activeUser, 
                    notes: { 
                        activeNote: newNote,
                        allNotes: [
                            newNote,
                            ...state.activeUser.notes.allNotes
                        ]
                    } 
                }
            }
        }
    }else if(action.type === DISPLAY_ACTIVE_NOTE){
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                notes: {
                    ...state.activeUser.notes,
                    activeNote: action.payload.newActiveNote
                }
            }
        }
    }else if(action.type === DELETE_NOTE){
        const newAllNotes = state.activeUser.notes.allNotes.filter((item) => item.id !== action.payload.id);
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                notes : {
                    activeNote: {},
                    allNotes: newAllNotes
                }
            }
        }
    }else if(action.type === EDIT_NOTE){
        const newAllNotes = state.activeUser.notes.allNotes.filter((item) => item.id !== action.payload.id);
        if(action.payload.edit === 'noteTitle'){
            const newActiveNote = {
                id: action.payload.id,
                title: action.payload.changedText,
                date: fullDate,
                content: state.activeUser.notes.activeNote.content
            } 
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    notes: {
                        activeNote: newActiveNote,
                        allNotes: [
                            newActiveNote,
                            ...newAllNotes
                        ]
                    }
                }
            }
        }else{
            const newActiveNote = {
                id: action.payload.id,
                title: state.activeUser.notes.activeNote.title,
                date: fullDate,
                content: action.payload.changedText
            }
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    notes: {
                        activeNote: newActiveNote,
                        allNotes: [
                            newActiveNote,
                            ...newAllNotes
                        ]
                    }
                }
            }
        }
    }
      return state;
  }

  export default reducer;