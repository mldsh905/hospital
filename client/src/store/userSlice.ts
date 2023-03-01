import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    user: any
}

const initialState: CounterState = {
    user: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer