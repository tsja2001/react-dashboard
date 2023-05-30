import { createSlice } from '@reduxjs/toolkit/dist'

const slice = createSlice({
  name: 'global',
  initialState: {
    theme: 'light'
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload
    }
  }
})

export const { changeTheme } = slice.actions
export default slice.reducer
