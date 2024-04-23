import {POST_ADD_POST, POST_SET_VALUE} from "../action-type/index.js";

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

const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case POST_SET_VALUE:
            return {
                ...state,
                dragon: {
                    ...state.dragon,
                    [action.payload.name]: action.payload.value
                }
            }

        case POST_ADD_POST:
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

export default postReducer