import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist'
import PostSlice from './PostSlice';
import DetailsSlice from './DetailsSlice';





const reducers = combineReducers({
    posts: PostSlice,
    details: DetailsSlice,
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter']
};
const persistedReduacer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReduacer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store;


