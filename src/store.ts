import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesReducers';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: moviesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export default store;
