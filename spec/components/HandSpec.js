import React from 'react';
import Hand from '../../src/components/Hand';
import Card from '../../src/components/Card'
import TestUtils from 'react/lib/ReactTestUtils';
import { render } from '../support/Render';

describe('Hand', function () {
    it('renders the cards in the hand as children', function () {
        var hand = TestUtils.renderIntoDocument(<Hand cards={[{}]}/>);
        var child = TestUtils.findRenderedComponentWithType(hand, Card);
        expect(TestUtils.isCompositeComponentWithType(child, Card)).toBe(true)
    });
});