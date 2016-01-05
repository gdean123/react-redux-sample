import React from 'react';
import BlackjackGame from '../../src/components/BlackjackGame';
import { render } from '../support/Render';

describe('BlackjackGame', function () {
    it('renders without problems', function () {
        var element = render(<BlackjackGame/>);
        expect(element.innerText).toContain("Blackjack!");
    });
});