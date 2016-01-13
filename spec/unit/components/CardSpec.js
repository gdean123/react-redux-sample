import React from 'react';
import Card from '../../../src/components/card';
import { shallowRender } from '../../helpers/Render';

describe('Card', function() {
  describe('when card is not hidden', function() {
    it('renders a card', function () {
      var card = shallowRender(<Card number={100} suit={'hearts'} />);
      expect(card.props.children).toContain("100 of hearts");
    });
  });

  describe('when card is hidden', function() {
    it('renders the card hidden', function() {
      var card = shallowRender( <Card number={10293841} suit={'spades'} facedown={true} />);
      expect(card.props.children).toEqual('');
    })
  })
});
