import { createSlice } from '@reduxjs/toolkit';

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
        alert(`${payload.name} is already in contacts`);
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
