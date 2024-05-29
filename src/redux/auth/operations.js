import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerFetch, logInFetch, logOutFetch, setAuthHeader, refreshUserFetch } from "../../fetch/fetch";

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        const response = await registerFetch(data)
        setAuthHeader(response.token)
        console.log(response)
        return response
    } catch (error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await logInFetch(data)
        setAuthHeader(response.token)
        return response
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        logOutFetch()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    if(persistedToken === null) return
    try {
        setAuthHeader(persistedToken)
        const response = await refreshUserFetch()
        return response
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})