import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import Info from "./Components/Info";
import BottomBar from "./Components/BottomBar";
import Main from "./Main";
import './Styles/app.css';
import Icons from "./Components/Icons";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//changed createStore for configureStore

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Info />
        <Main />
        <Icons />
        <BottomBar />
      </div>
    </Provider>
  );
}

export default App;
