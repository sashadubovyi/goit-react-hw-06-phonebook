import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
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

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
