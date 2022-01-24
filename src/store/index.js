import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { itemsReducer } from './contacts/items-slice';
import { filterReducer } from './contacts/filter-slice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts/contactsApi';

// const rootReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    filter: filterReducer,

    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
