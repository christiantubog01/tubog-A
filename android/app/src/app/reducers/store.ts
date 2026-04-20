import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '../reducers/auth';

// =====================
// Saga middleware
// =====================
const sagaMiddleware = createSagaMiddleware();

// =====================
// Persist configs
// =====================
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],
};

// =====================
// Reducers
// =====================
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// =====================
// Store factory
// =====================
export const configureAppStore = () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
  );

  const persistor = persistStore(store);

  const runSaga = sagaMiddleware.run;

  return { store, persistor, runSaga };
};

// =====================
// TYPES (THIS IS WHAT YOU NEED)
// =====================
export type RootState = ReturnType<ReturnType<typeof configureAppStore>['store']['getState']>;
export type AppDispatch = ReturnType<ReturnType<typeof configureAppStore>['store']['dispatch']>;