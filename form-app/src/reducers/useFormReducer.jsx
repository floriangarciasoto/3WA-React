import { useReducer } from "react";

const formBaseState = {
    inputValue: '',
    canAddItem: false,
    list: []
}

const formReducer = (state,action) => {
    switch(action.type) {
        case 'changeItem':
            return {
                ...state,
                inputValue: action.payload
            }
        case 'changeCanAddItem':
            return {
                ...state,
                canAddItem: action.payload
            }
        case 'addItem':
            return {
                ...state,
                inputValue: '',
                list: state.list.concat([{
                    id: action.payload,
                    name: state.inputValue,
                    isChecked: false
                }])
            }
        case 'deleteItem':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
        case 'invertList':
            const newList = [];
            for (var i = state.list.length-1; i >= 0; i--) newList.push(state.list[i]);
            return {
                ...state,
                list: newList
            }
        case 'toogleChecked':
            return {
                ...state,
                list: state.list.map(item => item.id == action.payload ? {...item,isChecked:!item.isChecked} : item)
            }
        default:
            return state
    }
}

export default () => useReducer(formReducer,formBaseState)
