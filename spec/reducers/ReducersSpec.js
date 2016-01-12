import reducer from '../../src/reducers/Reducers';
import { startGame } from '../../src/actions/Actions'

describe('reducers', function () {
    const initialState = { gameStarted: false };

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

    it ('initializes dealer hand when the START_GAME action is called', function() {
        var dealerHand = reducer(initialState, startGame()).dealerHand;

        expect(dealerHand.length).toEqual(2);
        expectToBeAValidCard(dealerHand[0]);
        expectToBeAValidCard(dealerHand[1]);
    });
    function expectToBeAValidCard(card) {
        expect(card.number).toMatch(/\d+/);
        expect(['clubs', 'diamonds', 'hearts', 'spades']).toContain(card.suit);
    }
});

