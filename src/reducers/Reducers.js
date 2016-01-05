import { START_GAME } from '../constants/ActionTypes'

const initialState = {
    gameStarted: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                gameStarted: true
            }
    }

    return state;
}