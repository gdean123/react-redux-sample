import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { startGame } from '../actions/BlackjackActions';

import BlackjackApp from './BlackjackApp';
import reducer from '../reducers/blackjack';

const store = createStore(reducer);

export default class App extends Component {
    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        let self = this;
        store.subscribe(function() {
            self.setState(store.getState());
        });
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <BlackjackApp
                        gameStarted={this.state.gameStarted}
                        onStartGame={ () => store.dispatch(startGame()) }
                    />
                </Provider>
            </div>
        );
    }
}