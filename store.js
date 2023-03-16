import { configureStore } from '@reduxjs/toolkit'
import openMenuReducer from './slices/openMenuSlice'

export default configureStore({
   reducer: {
      openMenu: openMenuReducer,
   },
})