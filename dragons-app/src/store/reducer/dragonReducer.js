import {DRAGON_ADD_DRAGON, DRAGON_SET_VALUE} from "../action-type/index.js";

const initialState = {
    dragon: {
        name: '',
        age: 0
    },
    dragons: [{
        id: 1234,
        name: 'Alduin',
        age: 26100
    }]
};

const dragonReducer = (state = initialState, action) => {
    switch (action.type) {

        case DRAGON_SET_VALUE:
            return {
                ...state,
                dragon: {
                    ...state.dragon,
                    [action.payload.name]: action.payload.value
                }
            }

        case DRAGON_ADD_DRAGON:
            return {
                ...state,
                dragons: state.dragons.concat([{...state.dragon, id: Date.now()}]),
                dragon: {
                    name: '',
                    age: 0
                }
            }

        default:
            return state;
    }
};

export default dragonReducer