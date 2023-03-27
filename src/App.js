import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { configureStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const store = configureStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//changed createStore for configureStore


function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
