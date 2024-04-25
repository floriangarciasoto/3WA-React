import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './slice/todoSlice'
import logSlice, { logAction } from './slice/logSlice';

const middleware = (store) => (next) => (action) => {
    if (action.type !== logAction.toString()) {
        store.dispatch(logAction(action));
    }
    next(action);
}

const store = configureStore({
    reducer: {
        todo: todoSlice,
        log: logSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([
      middleware
    ])
})

export default store