import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value : false,
}

export const openMenuSlice = createSlice({
   name: "openMenu",
   initialState,
   reducers: {
      setOpenMenu : (state, action) => {
         state.value = action.payload
      }
   }
})

export const { setOpenMenu } = openMenuSlice.actions;

export default openMenuSlice.reducer;