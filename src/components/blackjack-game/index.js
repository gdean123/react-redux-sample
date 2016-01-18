import React, { Component, PropTypes } from 'react';
import * as BlackjackActions from '../../actions/Actions';
import { DealerHand, PlayerHand } from './../hand/index';

class BlackjackGame extends Component {
  render() {
    const { dealerHand, playerHand, gameStarted, deck, startGame, hit } = this.props;
    return (
      <div className="top">
        <h1>Blackjack!</h1>
        {
          gameStarted ?
            <Game dealerHand={ dealerHand } playerHand={ playerHand } hit={ hit }/> :
            <button onClick={(event) => startGame()}>Start Game</button>
        }
      </div>
    );
  }
}

BlackjackGame.propTypes = {
  hit: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool,
  dealerHand: PropTypes.array,
  playerHand: PropTypes.array,
  deck: PropTypes.array
};
BlackjackGame.defaultProps = {
  gameStarted: false,
  dealerHand: [],
  playerHand: []
};

const Game = ({ dealerHand, playerHand, hit }) => (
  <div>
    <h2>Game started!</h2>
    <DealerHand cards={dealerHand}/>
    <PlayerHand cards={playerHand}/>
    <button onClick={(event) => hit()} className='hit'>HIT</button>
  </div>
);

Game.propTypes = {
  dealerHand: PropTypes.array.isRequired,
  playerHand: PropTypes.array.isRequired,
  hit: PropTypes.func.isRequired
};


export default BlackjackGame;
