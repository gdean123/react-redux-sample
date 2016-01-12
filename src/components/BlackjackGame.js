import React, { Component } from 'react';
import * as BlackjackActions from '../actions/Actions';
import Hand from './Hand';

export default class BlackjackGame extends Component {
    render() {
        return (
            <div>
                <h1>Blackjack!</h1>
                <button onClick={(event) => this.props.startGame()}>Start Game</button>

                { this.props.gameStarted ? this.renderHand() : null }
            </div>
        );
    }

    renderHand() {
        return (
            <div>
                <h2>Game started!</h2>
                <Hand cards={this.props.playerHand} />
                <Hand cards={this.props.dealerHand} dealer={true} />
            </div>
        )
    }
}