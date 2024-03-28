import { useReducer } from "react";

const todoBaseState = {
    formCatName: '',
    formTodoCat: '-1',
    formTodoName: '',
    formTodoDescription: '',
    todoCats : [],
    showCats: -1
}

const todoReducer = (state,action) => {
    switch(action.type) {

        case 'updateFormCatName':
            return {
                ...state,
                formCatName: action.payload
            }

        case 'addCat':
            return {
                ...state,
                formCatName: '',
                todoCats: state.todoCats.concat([{name: state.formCatName,todos: []}])
            }

        case 'deleteCat':
            return {
                ...state,
                todoCats: state.todoCats.filter((todoCat,index) => index ==! action.payload)
            }

        case 'updateFormTodoCat':
            return {
                ...state,
                formTodoCat: action.payload
            }

        case 'updateFormTodoName':
            return {
                ...state,
                formTodoName: action.payload
            }

        case 'updateFormTodoDescription':
            return {
                ...state,
                formTodoDescription: action.payload
            }

        case 'addTodo':
            return {
                ...state,
                formTodoCat: '-1',
                formTodoName: '',
                formTodoDescription: '',
                todoCats: state.todoCats.map((todoCat,index) => index == state.formTodoCat ? {name: todoCat.name, todos: todoCat.todos.concat([{name: state.formTodoName, description: state.formTodoDescription}])} : todoCat)
            }

        case 'deleteTodo':
            return {
                ...state,
                todoCats: state.todoCats.map((todoCat,index) => index == action.payload.catID ? {name: todoCat.name, todos: todoCat.todos.filter((todo,index) => index !== action.payload.todoID)} : todoCat)
            }
        
        case 'uptadeCatFilter':
            return {
                ...state,
                showCats: parseInt(action.payload)
            }
    
        default:
            return state
            
    }
}

export default () => useReducer(todoReducer,todoBaseState);
