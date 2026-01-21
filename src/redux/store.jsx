import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice.jsx'
import appReducer from './appSlice.jsx' 
import basketReducer  from "./basketSlice.jsx"

export const store = configureStore({
  reducer: {
    products: productReducer,
    app: appReducer,
    basket:basketReducer,
  },
})