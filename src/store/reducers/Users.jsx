import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: null,
    user: null
}

const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state,action) {
            state.error = action.payload
        },
        handleChange(state,action) {
          state[action.payload.name] = action.payload.value
        },
        setInitialStore(){
            return initialState
        },
    }
})

export const { setError, setLoading, handleChange, setInitialStore } = users.actions

export default users.reducer
