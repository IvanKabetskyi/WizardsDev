import {createStore, applyMiddleware, combineReducers, Action} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from '@react-native-async-storage/async-storage';

import AppConfig from 'constants/config';
import eventsReducer from 'store/Events/reducer';

const middlewares = [thunk];

const appReducer = combineReducers({events: eventsReducer});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: any, action: Action): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

const persistConfig: PersistConfig<any> = {
    key: AppConfig.reduxStore,
    storage,
    version: Number(AppConfig.reduxStoreVersion),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const persistedStore = persistStore(store);

export {store, persistedStore, rootReducer};
