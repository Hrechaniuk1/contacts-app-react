import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, refreshUser } from '../auth/operations'

function errorHandler() {
    console.log('error')
}

function loadingHandler() {
    console.log('loading')
}

function resetItems(state) {
  state.items = []
}
 
const authSlice = createSlice({
    name: 'auth',
    initialState: {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
    },
  extraReducers: builder => {
    builder
      .addCase(register.pending, loadingHandler)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(register.rejected, errorHandler)

      .addCase(login.pending, loadingHandler)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(login.rejected, errorHandler)
      
      .addCase(logout.pending, loadingHandler)
      .addCase(logout.fulfilled, (state) => {
        state.user = {name: null, email: null,}
        state.token = null
        state.isLoggedIn = false
        resetItems(state)
      })
      .addCase(logout.rejected, errorHandler)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false
      })

    }
})

export const authReduser = authSlice.reducer