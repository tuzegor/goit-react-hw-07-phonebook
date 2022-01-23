import { createSlice } from '@reduxjs/toolkit';

let initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsFromStorage = JSON.parse(localStorage.getItem('contactsStorage'));
if (contactsFromStorage !== null) {
  initialState = contactsFromStorage;
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    removeContact(state, action) {
      return state.filter(obj => obj.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
