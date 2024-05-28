import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerFetch, logInFetch, logOutFetch, setAuthHeader } from "../../fetch/fetch";

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        const response = await registerFetch(data)
        setAuthHeader(response.token)
        return response
    } catch (error) {
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