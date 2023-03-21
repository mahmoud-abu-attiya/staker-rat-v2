import { configureStore } from '@reduxjs/toolkit'
import openMenuReducer from './slices/openMenuSlice'
import langReducer from './slices/langSlice'
import themeReducer from './slices/themeSlice'

export default configureStore({
   reducer: {
      openMenu: openMenuReducer,
      lang: langReducer,
      theme: themeReducer,
   },
})