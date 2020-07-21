import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import Reducers from './reducers';

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['auth'],
    },
    Reducers,
);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

const persistor = persistStore(store);

export {store, persistor};
