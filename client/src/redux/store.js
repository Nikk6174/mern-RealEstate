import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//after npm i redux-persist
const rootReducer = combineReducers({user: userReducer});

const persistConfig = {
    key: 'root',
    storage,
    version : 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // Adding middleware to the store to avoid the error of dispatching a non-serializable value
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export const persistor = persistStore(store);
