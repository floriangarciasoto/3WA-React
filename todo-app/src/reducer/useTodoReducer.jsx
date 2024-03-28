import { useReducer } from "react";

const todoBaseState = {
    formCatName: '',
    formTodoCat: -1,
    formTodoName: '',
    formTodoDescription: '',
    todoCats : [],
    showCats: -1,
    errorInFormCat: '',
    errorInFormTodo: ''
}

const todoReducer = (state,action) => {
    switch(action.type) {

        case 'updateFormCatName':
            return {
                ...state,
                formCatName: action.payload,
                errorInFormCat: ''
            }

        case 'setErrorInFormCat':
            return {
                ...state,
                errorInFormCat: action.payload
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
                formTodoCat: parseFloat(action.payload),
                errorInFormTodo: ''
            }

        case 'updateFormTodoName':
            return {
                ...state,
                formTodoName: action.payload,
                errorInFormTodo: ''
            }

        case 'updateFormTodoDescription':
            return {
                ...state,
                formTodoDescription: action.payload,
                errorInFormTodo: ''
            }
        
        case 'addTodo':
            return {
                ...state,
                formTodoCat: -1,
                formTodoName: '',
                formTodoDescription: '',
                todoCats: state.todoCats.map((todoCat,index) => index === state.formTodoCat ? {name: todoCat.name, todos: todoCat.todos.concat([{name: state.formTodoName, description: state.formTodoDescription, done: false}])} : todoCat)
            }

        case 'toggleTodoCheck':
            return {
                ...state,
                todoCats: state.todoCats.map((todoCat,index) => index === action.payload.catID ? {name: todoCat.name, todos: todoCat.todos.map((todo,index) => index === action.payload.todoID ? {name: todo.name, description: todo.description, done: !todo.done} : todo )} : todoCat)
            }
    
        case 'deleteTodo':
            return {
                ...state,
                todoCats: state.todoCats.map((todoCat,index) => index === action.payload.catID ? {name: todoCat.name, todos: todoCat.todos.filter((todo,index) => index !== action.payload.todoID)} : todoCat)
            }
        
        case 'uptadeCatFilter':
            return {
                ...state,
                showCats: parseInt(action.payload)
            }
        
        case 'setErrorInFormTodo':
            return {
                ...state,
                errorInFormTodo: action.payload
            }
    
        default:
            return state
            
    }
}

export default () => useReducer(todoReducer,todoBaseState);
