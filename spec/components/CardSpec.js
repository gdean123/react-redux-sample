import React from 'react';
import Card from '../../src/components/Card';
import { render } from '../support/Render';

describe('Card', function() {
    it('renders a card', function() {
        var card = render(<Card number={100} suit={'christa'}/>);
        expect(card.element.innerText).toContain("100 of christa");
    });
});