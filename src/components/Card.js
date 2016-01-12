import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        var cardText, cardClass;

        if (this.props.facedown){
            cardText = 'HIDDEN';
            cardClass = 'facedown';
        }
        else {
            cardText = `${this.props.number} of ${this.props.suit}`;
        }

        return (
            <div className={`card ${cardClass}`}>{cardText}</div>
        );
    }
}
