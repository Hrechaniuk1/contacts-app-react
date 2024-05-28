import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout } from '../auth/operations'

function errorHandler() {
    console.log('error')
}

function loadingHandler() {
    console.log('loading')
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
      })
      .addCase(logout.rejected, errorHandler)

    }
})

export const authReduser = authSlice.reducer