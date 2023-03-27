import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { configureStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import Info from "./Components/Info";
import BottomBar from "./Components/BottomBar";
import Weather from './Components/Weather/Weather';

const store = configureStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//changed createStore for configureStore


function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Info />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path='/weather' element={<Weather />} />
            </Routes>
          </BrowserRouter>
        </main>
        <div className='icons'>

        </div>
        <BottomBar />
      </div>
    </Provider>
  );
}

export default App;
