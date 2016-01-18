import reducer from '../../../src/reducers/Reducers';
import { startGame, hit } from '../../../src/actions/Actions'

describe('reducers', function () {
  const initialState = {gameStarted: false};
  describe('when a game is started', function () {


    it('initializes to a game not started state', function () {
      expect(reducer(undefined, {type: "@@redux/INIT"})).toEqual(initialState)
    });

    it('starts the game when the START_GAME action is called', function () {
      expect(reducer(initialState, startGame()).gameStarted).toEqual(true)
    });

    it('initializes player hand when the START_GAME action is called', function () {
      var playerHand = reducer(initialState, startGame()).playerHand;

      expect(playerHand.length).toEqual(2);
      expectToBeAValidCard(playerHand[0]);
      expectToBeAValidCard(playerHand[1]);
    });

    it('initializes dealer hand when the START_GAME action is called', function () {
      var dealerHand = reducer(initialState, startGame()).dealerHand;

      expect(dealerHand.length).toEqual(2);
      expectToBeAValidCard(dealerHand[0]);
      expectToBeAValidCard(dealerHand[1]);
    });

    it('saves the remaining cards', function() {
      expect(reducer(initialState, startGame()).deck.count.toEqual(48))
    });
  });

  describe("when HIT is called", function () {
    var gameStartedState;

    beforeEach(function () {
      gameStartedState = reducer(initialState, startGame());
    });

    it('the player\'s hand increases by one', function () {
      expect(reducer(gameStartedState, hit()).playerHand.length).toEqual(3)
    });

    it('the player\'s hand should not have repeat cards', function () {

    });


  });

  function expectToBeAValidCard(card) {
    expect(card.number).toMatch(/\d+/);
    expect(['clubs', 'diamonds', 'hearts', 'spades']).toContain(card.suit);
  }
});

