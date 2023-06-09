import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, { payload }) {
      if (
        state.find(
          contact => payload.name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(
          `You have already created a contact with the name ${payload.name}`
        );
        return state;
      }
      return [...state, payload];
    },
    removeContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = usersSlice.reducer;
export const { addContact, removeContact } = usersSlice.actions;
