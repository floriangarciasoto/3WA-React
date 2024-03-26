import { useReducer } from "react";

const initialState = {
    counter: 0,
    cycle: 0
}

function counterReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'addCycle':
            return {
                ...state,
                counter: 0,
                cycle: state.cycle + 1
            }
        case 'reset':
            return {
                ...state,
                counter: 0,
                cycle: 0
            }
        default:
            return state;
    }
}

const useCounterReducer = () => {
    return useReducer(counterReducer,initialState)
}

export default useCounterReducer
