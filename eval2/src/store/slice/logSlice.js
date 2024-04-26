import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: 'log',
    reducers: {
        logAction(state, action) {
            const currentDate = new Date().toLocaleString();
            const actionToLog = action.payload;
            const log = {
                date: currentDate,
                name: actionToLog.type
            };
            if (actionToLog.payload) log.payload = actionToLog.payload;
            state.logs.push(log);
        },
        resetLogs(state) {
            state.logs = [];
        }
    },
    initialState: {
        logs: []
    }
})

export const {
    logAction,
    resetLogs
} = logSlice.actions

export default logSlice.reducer