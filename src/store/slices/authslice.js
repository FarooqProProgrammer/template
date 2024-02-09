import { createSlice } from '@reduxjs/toolkit'

export const authslice = createSlice({
  name: 'counter',
  initialState: {
    auth: {}
  },
  reducers: {
 
    authUser: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { authUser } = authslice.actions

export default authslice.reducer