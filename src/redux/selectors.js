import {createSelector} from '@reduxjs/toolkit'

export const selectContacts = state => state.items.items
export const selectFilter = state => state.name
export const selectError = state => state.items.error
export const selectLoading = state => state.items.loading
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    const visibleContacts = contacts.filter(curr => curr.name.toLowerCase().includes(filter.name.toLowerCase()))
    return visibleContacts
})