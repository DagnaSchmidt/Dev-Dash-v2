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
    EDIT_NOTE,
    SET_DISPLAYED_DAY,
    ADD_WEATHER_LOCALIZATION,
    CLEAR_WEATHER_DISPLAYED_LOCALIZATION,
    OPEN_WEATHER_SAVED_LOCALIZATIONS,
    CHOOSE_WEATHER_DISPLAYED_LOCALIZATION,
    DELETE_WEATHER_LOCALIZATION
} from './actions';
import { v4 as uuidv4 } from 'uuid';

export const initialStore = {
    isLoggedIn: false,
    activeUser: {
        userName: '',
        password: '',
        localization: false,
        city: '',
        country: '',
        latitude: '',
        longitude: '',
        blackTheme: true,
        openUserPanel: false,
        activeWidget: 'none',
        activeWidgetColor: '',
        notes: {
            activeNote: {},
            allNotes: []
        },
        weather: {
            displayedDay: '',
            savedLocalizations: [],
            displayedLocalization: {},
            openSavedLocalizations: false
        }
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
        return {
            ...state, 
            activeUser: {
                ...state.activeUser,
                city: action.payload.city, 
                country: action.payload.country, 
                localization: true,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            }}
    }else if(action.type === DENY_LOCALIZATION){
        return {
            ...state, 
            activeUser: {
                ...state.activeUser, 
                localization: false
            }}
    }else if(action.type === CLOSE_WIDGET){
        return {...state, activeUser: {...state.activeUser, activeWidget: 'none'}}
    }else if(action.type === CHANGE_ACTIVE_WIDGET){
        return {...state, activeUser: {...state.activeUser, activeWidget: action.payload.widget, activeWidgetColor: action.payload.color}}
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
    }else if(action.type === SET_DISPLAYED_DAY){
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                weather: {
                    ...state.activeUser.weather,
                    displayedDay: action.payload.newDisplayedDay
                }
            }
        }
    }else if(action.type === ADD_WEATHER_LOCALIZATION){
        const newLocalization = {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            city: action.payload.city,
            country: action.payload.country,
            id: action.payload.id
        }
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                weather: {
                    displayedDay: '',
                    displayedLocalization: newLocalization,
                    openSavedLocalizations: false,
                    savedLocalizations: [
                        newLocalization,
                        ...state.activeUser.weather.savedLocalizations
                    ]
                }
            }
        }
    }else if(action.type === CLEAR_WEATHER_DISPLAYED_LOCALIZATION){
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                weather: {
                    ...state.activeUser.weather,
                    displayedLocalization: ''
                }
            }
        }
    }else if(action.type === OPEN_WEATHER_SAVED_LOCALIZATIONS){
        return {
            ...state,
            activeUser: {
                ...state.activeUser,
                weather: {
                    ...state.activeUser.weather,
                    displayedLocalization: '',
                    openSavedLocalizations: true
                }
            }
        }
    }else if(action.type === CHOOSE_WEATHER_DISPLAYED_LOCALIZATION){
        const newLocalization = {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            city: action.payload.city,
            country: action.payload.country
        }
        return {
           ...state,
           activeUser: {
                ...state.activeUser,
                weather: {
                    ...state.activeUser.weather,
                    openSavedLocalizations: false,
                    displayedLocalization: newLocalization
                }
            } 
        }
    }else if(action.type === DELETE_WEATHER_LOCALIZATION){
        const newSavedLocalizations = state.activeUser.weather.savedLocalizations.filter((item) => item.id !== action.payload.id);
        if(newSavedLocalizations.length === 0){
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    weather: {
                        ...state.activeUser.weather,
                        openSavedLocalizations: false,
                        savedLocalizations: newSavedLocalizations
                    }
                }
            }
        }else{
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    weather: {
                        ...state.activeUser.weather,
                        savedLocalizations: newSavedLocalizations
                    }
                }
            }
        }
        
    }
      return state;
  }

  export default reducer;