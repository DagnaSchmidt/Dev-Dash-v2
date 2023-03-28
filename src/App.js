import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import Info from "./Components/Info";
import BottomBar from "./Components/BottomBar";
import Weather from './Components/Weather/Weather';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//changed createStore for configureStore

console.log(store);

function App( {activeWidget} ) {
  return (
    <Provider store={store}>
      <div className='app'>
        <Info />
        {activeWidget !== 'none' &&
          <main>
            <BrowserRouter>
              <Routes>
                <Route path='/weather' element={<Weather />} />
              </Routes>
            </BrowserRouter>
          </main>
        }
        <div className='icons'>

        </div>
        <BottomBar />
      </div>
    </Provider>
  );
}

const mapStateToProps = state => {
  return { activeWidget: state.activeUser.activeWidget };
};

export default connect(mapStateToProps)(App);
