// import { compose, createStore, applyMiddleware } from 'redux';

import { configureStore } from "@reduxjs/toolkit";

import logger from 'redux-logger';
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';
// import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer";


// const persistConfig = {
//     key: 'root',
//     storage,
//     blackList: ['user']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middleWares)
});

// export const persistor = persistStore(store);

