import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        this.properties = this.props.properties;
        return (
            <div>{ this.properties.number } of { this.properties.suit }</div>
        );
    }
}