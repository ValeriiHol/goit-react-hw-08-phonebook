import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactThunk,
  deleteContactThunk,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactInitialState = { items: [], error: null, isLoading: false };

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
