import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    reducers: {
        setTodoValue(state,action) {
            state.todo[action.payload.name] = action.payload.value;
        },
        setTodoIsDone(state,action) {
            state.todo.isDone = action.payload
        },
        addTodo(state) {
            state.todos.push({
                ...state.todo,
                id: Date.now()
            });
            state.todo = {
                name: '',
                description: '',
                isDone: false
            };
        }
    },
    initialState: {
        todo: {
            name: '',
            description: '',
            isDone: false
        },
        todos: []
    }
})

export const {
    setTodoValue,
    setTodoIsDone,
    addTodo
} = todoSlice.actions

export default todoSlice.reducer