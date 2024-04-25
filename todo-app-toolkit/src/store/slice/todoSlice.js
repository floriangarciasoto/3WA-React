import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk(
    'fetchTodo',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        return res.data;
    }
)

export const addTodoToAPI = createAsyncThunk(
    'addTodoToAPI',
    async (arg, { getState }) => {
        const state = getState();
        const todo = {
            ...state.todo.todo,
            id: 1,
            userId: 1
        };
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',todo)
        return res;
    }
)

const todoSlice = createSlice({
    name: 'todo',
    reducers: {
        setTodoValue(state, action) {
            state.todo[action.payload.name] = action.payload.value;
        },
        setTodoCompleted(state, action) {
            state.todo.completed = action.payload
        }
    },
    initialState: {
        todo: {
            title: '',
            content: '',
            completed: false
        },
        todos: [],
        loading: {
            getTodosFromAPIState: 'idle',  // 'idle' | 'loading' | 'error'
            addTodoToAPIState: 'idle' // 'idle' | 'loading' | 'error'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.loading.getTodosFromAPIState = 'loading'
        })
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todos = action.payload
            state.loading.getTodosFromAPIState = 'idle'
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.loading.getTodosFromAPIState = "error"
        })

        builder.addCase(addTodoToAPI.pending, (state, action) => {
            state.loading.addTodoToAPIState = 'loading'
        })
        builder.addCase(addTodoToAPI.fulfilled, (state, action) => {
            let todoFromAPI = action.payload.data

            // Check same ID
            if (state.todos.find(todo => todo.id === todoFromAPI.id)) {
                todoFromAPI = {
                    ...todoFromAPI,
                    id: Date.now()
                }
            }

            state.todos.push({
                ...todoFromAPI
            });
            state.todo = {
                title: '',
                content: '',
                completed: false
            };
            state.loading.addTodoToAPIState = 'idle'
        })
        builder.addCase(addTodoToAPI.rejected, (state, action) => {
            state.loading.addTodoToAPIState = "error"
        })
    }
})

export const {
    setTodoValue,
    setTodoCompleted
} = todoSlice.actions

export default todoSlice.reducer