import {KNIGHT_ADD_KNIGHT, KNIGHT_SET_VALUE} from "../action-type/index.js";

const initialState = {
    knight: {
        name: '',
        age: 0
    },
    knights: [{
        id: 5678,
        name: 'Lucas chevalier',
        age: 22
    }]
};

const knightReducer = (state = initialState, action) => {
    switch (action.type) {

        case KNIGHT_SET_VALUE:
            return {
                ...state,
                knight: {
                    ...state.knight,
                    [action.payload.name]: action.payload.value
                }
            }

        case KNIGHT_ADD_KNIGHT:
            return {
                ...state,
                knights: state.knights.concat([{...state.knight, id: Date.now()}]),
                knight: {
                    name: '',
                    age: 0
                }
            }

        default:
            return state;
    }
};

export default knightReducer