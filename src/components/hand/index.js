import React, { PropTypes } from 'react';
import Card from './../card'
import './hand.sass';

const Hand = ({ cards, dealer, label }) => {
  return <div className='hand'>
    <h3>{label}</h3>
    {cards.map((card, index) => {
      const isFacedown = !!(index === 0 && dealer);
      return (
        <Card key={index} number={card.number} suit={card.suit} facedown={isFacedown}/>
      );
    })}
  </div>
};

Hand.propTypes = {
  dealer: PropTypes.bool,
  label: PropTypes.string.isRequired,
  cards: PropTypes.array
};
Hand.defaultProps = {
  dealer: false
};

export const DealerHand = ({ cards }) => (Hand({ cards, label: 'Dealer\'s Hand', dealer: true }));
export const PlayerHand = ({ cards }) => (Hand({ cards, label: 'Your Hand' }));
