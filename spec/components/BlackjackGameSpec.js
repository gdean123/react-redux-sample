import React from 'react';
import BlackjackGame from '../../src/components/BlackjackGame';
import TestUtils from 'react/lib/ReactTestUtils';
import { render } from '../support/Render';

describe('BlackjackGame', function () {
    var blackjackGame;

    beforeEach(function() {
        blackjackGame = render(<BlackjackGame startGame={jasmine.createSpy("startGame")}/>);
    });

    it('renders without problems', function () {
        expect(blackjackGame.element.innerText).toContain("Blackjack!");
    });

    it('triggers a START_GAME action when the start game button is clicked', function() {
        TestUtils.Simulate.click(blackjackGame.element.getElementsByTagName('button')[0]);
        expect(blackjackGame.component.props.startGame).toHaveBeenCalled();
    });
});