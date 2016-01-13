import React, { Component, PropTypes } from 'react';
import * as BlackjackActions from '../../actions/Actions';
import { DealerHand, PlayerHand } from './../hand/index';

const Game = ({ dealerHand, playerHand }) => (
  <div>
    <h2>Game started!</h2>
    <DealerHand cards={dealerHand}/>
    <PlayerHand cards={playerHand}/>
  </div>
);

Game.propTypes = {
  dealerHand: PropTypes.array.isRequired,
  playerHand: PropTypes.array.isRequired
};

class BlackjackGame extends Component {
  render() {
    const { dealerHand, playerHand, gameStarted, startGame } = this.props;
    return (
      <div className="top">
        <h1>Blackjack!</h1>
        <button onClick={(event) => startGame()}>Start Game</button>
        { gameStarted ? Game({ dealerHand, playerHand }) : null }
      </div>
    );
  }
}

BlackjackGame.propTypes = {
  startGame: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool,
  dealerHand: PropTypes.array,
  playerHand: PropTypes.array
};
BlackjackGame.defaultProps = {
  gameStarted: false,
  dealerHand: [],
  playerHand: []
};

export default BlackjackGame;
