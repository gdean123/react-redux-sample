import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BlackjackActions from '../actions/Actions';

export default class BlackjackApp extends Component {
    render() {
        return (
            <div>
                <h1>Blackjack!</h1>
                <button onClick={(event) => this.props.startGame()}>Start Game</button>

                { this.props.gameStarted ? <h2>Game started!</h2> : null }
            </div>
        );
    }
}