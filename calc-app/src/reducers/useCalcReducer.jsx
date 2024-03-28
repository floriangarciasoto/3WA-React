import { useReducer } from "react";

const calcBaseState = {
    screen: '',
    prepare: {
        operation: '',
        num: 0
    },
    operations: 0,
    error: ''
}

const calcReducer = (state,action) => {
    switch(action.type) {

        case 'changeScreen':
            return {
                ...state,
                error: '',
                screen: state.screen + action.payload
            }

        case 'prepareCalc':
            return {
                ...state,
                screen: '',
                prepare: {
                    operation: action.payload,
                    num: parseFloat(state.screen)
                }
            }

        case 'setResult':
            const num1 = parseFloat(state.prepare.num);
            const num2 = parseFloat(state.screen);
            let result = num1 + num2;
            if (state.prepare.operation === 'sub')
                result = num1 - num2;
            else if (state.prepare.operation === 'mul')
                result = num1 * num2;
            else if (state.prepare.operation === 'div')
                result = num1 / num2;
            result = Math.floor(result * 100) / 100;
            return {
                ...state,
                screen: result,
                prepare: {
                    operation: '',
                    num: 0
                },
                operations: state.operations + 1
            }

        case 'resetCalc':
            return {
                ...state,
                screen: '',
                prepare: {
                    operation: '',
                    num: 0
                }
            }

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
