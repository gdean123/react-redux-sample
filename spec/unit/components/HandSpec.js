import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../../src/components/card'
import { PlayerHand, DealerHand } from '../../../src/components/hand';
import { render, shallowRender } from '../../helpers/Render';

describe('Hand', function () {
  const eightOfSpades = {number: 8, suit:'spades'};
  const fourOfHearts = {number: 4, suit:'hearts'};

  describe('#PlayerHand', function() {
    it('renders the cards in the hand as children', function () {
      var hand = shallowRender(<PlayerHand cards={[eightOfSpades, fourOfHearts]} />);

      expect(hand.props.children).toEqual([
        <h3>Your Hand</h3>, [
          <Card key={0} number={8} suit={'spades'} facedown={false} />,
          <Card key={1} number={4} suit={'hearts'} facedown={false} />
        ]
      ]);
    });
  });

  describe('#DealerHand', function() {
    it('renders one facedown card', function(){
      var hand = shallowRender(<DealerHand cards={[eightOfSpades, fourOfHearts]}/>);

      expect(hand.props.children).toEqual([
        <h3>Dealer's Hand</h3>, [
          <Card key={0} number={8} suit={'spades'} facedown={true} />,
          <Card key={1} number={4} suit={'hearts'} facedown={false} />
        ]
      ]);
    });
  });
});
