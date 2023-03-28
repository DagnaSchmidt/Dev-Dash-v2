import {
    TOGGLE_COLOR_THEME
} from './actions';

const initialStore = {
    isLoggedIn: false,
    activeUser: {
        userName: '',
        password: '',
        localization: '',
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
        return { ...state, activeUser: { ...activeUser, blackTheme: !state.activeUser.blackTheme} };
      }
  }

  export default reducer;