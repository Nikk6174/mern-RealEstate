import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userslice';


const store = configureStore({
    reducer: { user: userReducer },
    // Adding middleware to the store to avoid the error of dispatching a non-serializable value
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
