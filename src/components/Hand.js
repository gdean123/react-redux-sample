import React, { Component } from 'react';
import Card from './Card'

export default class Hand extends Component {
    render() {
        return (
            <div>{ _.map(this.props.cards, this.renderCard.bind(this)) }</div>
        );
    }

    renderCard(card, index) {
        var isFacedown;

        if (index === 0 && this.props.dealer) {
            isFacedown = true;
        }
        return (
            <Card number={card.number} suit={card.suit} facedown={isFacedown} />
        );
    }
}