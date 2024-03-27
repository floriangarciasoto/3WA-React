import { useReducer } from "react";

const calcBaseState = {
    inputValue1: '',
    inputValue2: '',
    result: 0,
    error: false
}

const calcReducer = (state,action) => {
    switch(action.type) {
        case 'changeNumber1':
            return {
                ...state,
                inputValue1: action.payload,
                error: false
            }
        case 'changeNumber2':
            return {
                ...state,
                inputValue2: action.payload,
                error: false
            }
        case 'addNumbers':
            return {
                ...state,
                result: parseInt(state.inputValue1) + parseInt(state.inputValue2)
            }

        case 'mulNumbers':
            return {
                ...state,
                result: parseInt(state.inputValue1) * parseInt(state.inputValue2)
            }
        case 'setError':
            return {
                ...state,
                error: true
            }
        
        case 'reset':
            return calcBaseState

        default:
            return state
    }
}

export default () => useReducer(calcReducer,calcBaseState)
