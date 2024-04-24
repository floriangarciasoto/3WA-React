import {configureStore} from '@reduxjs/toolkit'
import messageSlice from './slice/messageSlice'
import countSlice from './slice/countSlice'


const store = configureStore({
    reducer: {
        message: messageSlice,
        count: countSlice
    }
})

export default store