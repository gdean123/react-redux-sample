import reducer from '../../src/reducers/Reducers';
import { startGame } from '../../src/actions/Actions'

describe('reducers', function () {
    const initialState = {gameStarted: false};

    it('initializes to a game not started state', function () {
        expect(reducer(undefined, {type: "@@redux/INIT"})).toEqual(initialState)
    });

    it('starts the game when the START_GAME action is called', function () {
        expect(reducer(initialState, startGame()).gameStarted).toEqual(true)
    })
});

