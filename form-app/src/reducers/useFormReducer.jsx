import { useReducer } from "react";

const formBaseState = {
    item: '',
    canAddItem: false,
    list: []
}

const formReducer = (state,action) => {
    switch(action.type) {
        case 'changeItem':
            return {
                ...state,
                canAddItem: action.payload.length > 0 && action.payload === action.payload.trim(),
                item: action.payload
            }
        case 'addItem':
            return {
                ...state,
                item: '',
                canAddItem: false,
                list: state.list.concat([state.item])
            }
        case 'deleteItem':
            return {
                ...state,
                list: state.list.filter((item,index) => index !== action.payload)
            }
        case 'invertList':
            const newList = [];
            for (var i = state.list.length-1; i >= 0; i--) newList.push(state.list[i]);
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}

const useFormReducer = () => useReducer(formReducer,formBaseState)

export default useFormReducer
