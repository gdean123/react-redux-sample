import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reducer from './reducers/blackjack';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);