import React, { PropTypes } from 'react';
import './card.sass';

const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];

const Card = ({ facedown, number, suit }) => {
  const cardText = facedown ? '' : `${number} of ${suit}`;
  return (<div className={`card ${facedown ? 'facedown' : ''}`}>{cardText}</div>)
};

Card.propTypes = {
  facedown: PropTypes.bool,
  number: PropTypes.number.isRequired,
  suit: PropTypes.oneOf(SUITS).isRequired
};
Card.defaultProps = {
  facedown: false
};

export default Card;
