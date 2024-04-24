import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    reducers: {
        setMessage(state, action) {
            state.text = action.payload
        }
    },
    initialState: {
        text: ''
    }
})

export const {
    setMessage
} = messageSlice.actions

export default messageSlice.reducer