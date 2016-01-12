import React from 'react/addons';
import Hand from '../../src/components/Hand';
import Card from '../../src/components/Card'
import TestUtils from 'react/lib/ReactTestUtils';
import { render } from '../support/Render';

describe('Hand', function () {
    const eightOfSpades = {number: 8, suit:'spades'};
    const fourOfHearts = {number: 4, suit:'hearts'};

    it('renders the cards in the hand as children (validated by finding number of children that are cards)', function () {
        var hand = render(<Hand cards={[eightOfSpades, fourOfHearts]}/>);
        var cards = TestUtils.scryRenderedComponentsWithType(hand.component, Card);
        expect(cards.length).toEqual(2);
    });

    it('renders the cards in the hand as children (validated by checking contents of rendered children)', function () {
        var hand = render(<Hand cards={[eightOfSpades, fourOfHearts]}/>);
        expect(hand.element.innerText).toContain("8 of spades");
        expect(hand.element.innerText).toContain("4 of hearts");
    });

    it('renders one facedown card when dealer is true', function(){
        var hand = render(<Hand cards={[eightOfSpades, fourOfHearts]} dealer={true}/>);
        expect(hand.element.innerText).not.toContain("8 of spades");
        expect(hand.element.innerText).toContain("4 of hearts");
    });
});