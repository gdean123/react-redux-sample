import React from 'react';
import Card from '../../src/components/Card';
import { render } from '../support/Render';

describe('Card', function() {
    describe('when card is not hidden', function() {
        it('renders a card', function () {
            var card = render( < Card number={100} suit={'christa'} / >);
            expect(card.element.innerText).toContain("100 of christa");
        });
    })

    describe('when card is hidden', function() {
        it('renders the card hidden', function() {
            var card = render( < Card number={10293841} suit={'ADAM'} facedown={true} / >);
            expect(card.element.innerText).toContain("HIDDEN");
        })
    })
});