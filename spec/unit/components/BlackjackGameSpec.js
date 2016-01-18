import React from 'react';
import BlackjackGame from '../../../src/components/blackjack-game/index';
import TestUtils from '../../../node_modules/react/lib/ReactTestUtils';
import { render } from '../../helpers/Render';

describe('BlackjackGame', function () {
  describe('before the game has started', function () {
    beforeEach(function () {
      this.startGameSpy = jasmine.createSpy("startGame");
      this.blackjackGame = render(<BlackjackGame startGame={this.startGameSpy}/>);
    });

    describe('when the start game button is clicked', function () {
      beforeEach(function () {
        TestUtils.Simulate.click(this.blackjackGame.element.getElementsByTagName('button')[0]);
      });

      it('triggers a START_GAME action', function () {
        expect(this.blackjackGame.component.props.startGame).toHaveBeenCalled();
      });
    });
  });

  describe('when the game has started', function () {
    beforeEach(function () {
      this.startGameSpy = jasmine.createSpy("startGame");
      this.blackjackGame = render(<BlackjackGame startGame={this.startGameSpy} gameStarted={true} />);
    });

    it('hides the start game button', function () {
      expect($(this.blackjackGame.element).find('button:contains("Start Game")')).not.toExist();
    });
  });

  describe('when the hit button is clicked', function () {
    beforeEach(function () {
      this.hitSpy = jasmine.createSpy("hit");
      this.blackjackGame = render(<BlackjackGame  hit={this.hitSpy} gameStarted={true} />);
    });

    it('triggers a HIT action', function () {
      TestUtils.Simulate.click(this.blackjackGame.element.getElementsByTagName('button')[0]);
      expect(this.blackjackGame.component.props.hit).toHaveBeenCalled();
    })
  });
});
