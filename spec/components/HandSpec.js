import React from 'react';
import Hand from '../../src/components/Hand';
import { render } from '../support/Render';

describe('Hand', function () {
    it('renders the cards in the hand', function () {
        var cards = [{ number: 9, suit: 'hearts' }, { number: 2, suit: 'spades' }];
        var element = render(<Hand cards={cards}/>);

        expect(element.innerText).toContain("9 of hearts");
        expect(element.innerText).toContain("2 of spades");
    });
});