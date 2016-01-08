import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">{ this.props.number } of { this.props.suit }</div>
        );
    }
}
