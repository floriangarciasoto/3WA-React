import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    reducers: {
        increment(state) {
            state.count++
        }
    },
    initialState: {
        count: 0
    }
})

export const {
    increment
} = countSlice.actions

export default countSlice.reducer