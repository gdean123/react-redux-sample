import React, { Component } from 'react';
import Card from './Card'

export default class Hand extends Component {
    render() {
        return (
            <div>{ _.map(this.props.cards, this.renderCard) }</div>
        );
    }

    renderCard(card) {
        return (
            <Card properties={card} />
        );
    }
}