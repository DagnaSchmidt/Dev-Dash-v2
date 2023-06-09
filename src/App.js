import { createStore } from "redux";
import reducer from "./reducer";
import { initialStore } from "./reducer";
import { Provider } from "react-redux";
import Info from "./Components/Info";
import BottomBar from "./Components/BottomBar";
import Main from "./Main";
import './Styles/app.css';
import Icons from "./Components/Icons";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  reducer,
  initialStore
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//changed createStore for configureStore
console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <Info />
          <Main />
          <Icons />
          <BottomBar />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
