import { useReducer } from "react";

const calcBaseState = {
    // inputValue1: '',
    // inputValue2: '',
    screen: '',
    numPrepare: 0,
    operationPrepare: '',
    result: 0,
    operations: 0,
    error: ''
}

const calcReducer = (state,action) => {
    switch(action.type) {
        // case 'changeNumber1':
        //     return {
        //         ...state,
        //         inputValue1: action.payload,
        //         error: false
        //     }
        // case 'changeNumber2':
        //     return {
        //         ...state,
        //         inputValue2: action.payload,
        //         error: false
        //     }
        case 'changeScreen':
            return {
                ...state,
                error: '',
                screen: state.screen + action.payload
            }
        // case 'addNumbers':
        //     return {
        //         ...state,
        //         result: parseInt(state.inputValue1) + parseInt(state.inputValue2)
        //     }

        // case 'mulNumbers':
        //     return {
        //         ...state,
        //         result: parseInt(state.inputValue1) * parseInt(state.inputValue2)
        //     }
        case 'prepareAdd':
            return {
                ...state,
                screen: '',
                numPrepare: parseInt(state.screen),
                operationPrepare: 'add'
            }
        case 'prepareSub':
            return {
                ...state,
                screen: '',
                numPrepare: parseInt(state.screen),
                operationPrepare: 'sub'
            }
        case 'prepareMul':
            return {
                ...state,
                screen: '',
                numPrepare: parseInt(state.screen),
                operationPrepare: 'mul'
            }
        case 'setResult':
            let result = parseInt(state.numPrepare) + parseInt(state.screen);
            if (state.operationPrepare === 'sub')
                result = parseInt(state.numPrepare) - parseInt(state.screen);
            else if (state.operationPrepare === 'mul')
                result = parseInt(state.numPrepare) * parseInt(state.screen);
            return {
                ...state,
                screen: result,
                numPrepare: 0,
                operationPrepare: ''
            }
        // case 'incrementOperations':
        //     return {
        //         ...state,
        //         operations: state.operations < 10 ? state.operations + 1 : 0
        //     }
        case 'setError':
            return {
                ...state,
                error: action.payload
            }
        case 'reset':
            return calcBaseState

        default:
            return state
    }
}

export default () => useReducer(calcReducer,calcBaseState)
