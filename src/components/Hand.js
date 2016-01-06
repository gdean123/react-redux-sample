import React, { Component } from 'react';

export default class Hand extends Component {
    render() {
        return (
            <div>{ _.map(this.props.cards, this.renderCard) }</div>
        );
    }

    renderCard(card) {
        return (
            <div>{card.number} of {card.suit}</div>
        );
    }
}