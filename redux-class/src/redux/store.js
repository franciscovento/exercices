import {createStore} from 'redux';
import reducer from './reducers'

const initialState = {
    todos: [
       { 
        id: 0,
        name: 'Ir la gimnasio',
        complete: false
        },
        { 
        id: 1,
        name: 'Lavar ropa',
        complete: true
        },
    ],
};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())