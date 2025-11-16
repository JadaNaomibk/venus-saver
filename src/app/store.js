// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import goalsReducer from '../features/goals/goalsSlice'
import quoteReducer from '../features/quote/quoteSlice'

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    quote: quoteReducer,
  },
})
