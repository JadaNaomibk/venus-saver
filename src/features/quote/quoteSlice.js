// src/features/quote/quoteSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async () => {
    const response = await fetch('https://api.quotable.io/random?tags=business')
    if (!response.ok) {
      throw new Error('Failed to fetch quote')
    }
    const data = await response.json()
    return { text: data.content, author: data.author }
  }
)

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: '',
    author: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.text = action.payload.text
        state.author = action.payload.author
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default quoteSlice.reducer
