import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './courses/courseReducer';
import authReducer from './auth/authReducer';
import burgerReducer from './burgerMenu/burgerReducer';
import noteReducer from './notes/noteReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        courses: courseReducer,
        burger: burgerReducer,
        notes: noteReducer,
    },
});

export const persistor = persistStore(store);
