import {
    TOGGLE_COLOR_THEME,
    CHANGE_USERNAME,
    UPDATE_LOCALIZATION,
    DENY_LOCALIZATION
} from './actions';

export const initialStore = {
    isLoggedIn: false,
    activeUser: {
        userName: 'your name',
        password: '',
        localization: '', // true / false
        city: '',
        country: '',
        blackTheme: true,
        openUserPanel: false,
        activeWidget: 'none'
    },
    users: [],
  };

  //all widgets: 
  // weather / notes / calendar / calculator 
  // movies / books / expenses / time tracker 
  // board games / calorie counter / music 
  // translator / video games / exercises

  function reducer(state = initialStore, action) {
    if (action.type === TOGGLE_COLOR_THEME) {
        return { ...state, activeUser: { ...state.activeUser, blackTheme: !state.activeUser.blackTheme}};
    }else if(action.type === CHANGE_USERNAME){
        return {...state, activeUser: {...state.activeUser, userName: action.payload.name}};
    }else if(action.type === UPDATE_LOCALIZATION){
        console.log(state)
        return {...state, activeUser: {...state.activeUser, city: action.payload.city, country: action.payload.country, localization: true}}
    }else if(action.type === DENY_LOCALIZATION){
        return {...state, activeUser: {...state.activeUser, localization: false}}
    }
    console.log(state);
      return state;
  }

  export default reducer;