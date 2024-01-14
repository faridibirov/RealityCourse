import React from 'react';
import { render } from 'react-dom';
import App from './Containers/app.jsx'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
 
import HouseReadReducer from './Containers/HouseRead/houseReadReducer.jsx';
import HouseIndexReducer from './Containers/HouseIndex/houseIndexReducer.jsx';


const rootReducer = combineReducers({
    HouseReadReducer,
    HouseIndexReducer
})

function configureStore(initialStore) {
    return createStore(rootReducer, initialStore, applyMiddleware(thunk));
}


const store = configureStore();

render(
    <Provider store={store }>
        <App />
    </Provider>,
    document.getElementById('content')
);