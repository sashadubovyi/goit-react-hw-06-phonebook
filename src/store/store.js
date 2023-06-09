import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './userSlice';
import { filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
