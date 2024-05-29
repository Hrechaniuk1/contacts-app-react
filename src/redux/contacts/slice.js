import { createSlice } from "@reduxjs/toolkit";

import { addContact, fetchContacts, deleteContact } from './operations'

function errorHandler(state, action) {
    state.error = action.payload
}

function loadingHandler(state) {
    state.loading = true
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        error: null,
        loading: false
    }, 
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, loadingHandler)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, errorHandler)
            // 
            .addCase(addContact.pending, loadingHandler)
            .addCase(addContact.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, errorHandler)
            // 
            .addCase(deleteContact.pending, loadingHandler)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.error = null
                state.loading = false
                const index = state.items.find(item => item.id === action.payload)
                // console.log(action.payload.data.id)
                state.items.splice(state.items.indexOf(index), 1)
            })
            .addCase(deleteContact.rejected, errorHandler)
    }

})


export const contactsReduser = contactsSlice.reducer