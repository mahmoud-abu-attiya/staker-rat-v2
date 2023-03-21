import { configureStore } from '@reduxjs/toolkit'
import openMenuReducer from './slices/openMenuSlice'
import langReducer from './slices/langSlice'

export default configureStore({
   reducer: {
      openMenu: openMenuReducer,
      lang: langReducer,
   },
})