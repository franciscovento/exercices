import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import { Provider as StoreProvider} from 'react-redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

