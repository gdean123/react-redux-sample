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
                <div className='hand dealer-hand'>
                    <h3>Dealer's Hand!</h3>
                    <Hand cards={this.props.dealerHand} dealer={true} />
                </div>
                <div className='hand your-hand'>
                    <h3>Your Hand!</h3>
                    <Hand cards={this.props.playerHand} />
                </div>
            </div>
        )
    }
}