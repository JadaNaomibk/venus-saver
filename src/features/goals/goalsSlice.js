// src/features/goals/goalsSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  goals: [],
}

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: {
      reducer(state, action) {
        state.goals.push(action.payload)
      },
      prepare({ name, targetAmount, targetDate }) {
        return {
          payload: {
            id: nanoid(),
            name,
            targetAmount: Number(targetAmount),
            targetDate, // string "YYYY-MM-DD"
            saved: 0,
          },
        }
      },
    },
    addDeposit(state, action) {
      const { goalId, amount } = action.payload
      const numericAmount = Number(amount)
      const goal = state.goals.find((g) => g.id === goalId)
      if (!goal || Number.isNaN(numericAmount) || numericAmount <= 0) return

      const newSaved = goal.saved + numericAmount
      // don't exceed target, feels more "locked"
      goal.saved = Math.min(newSaved, goal.targetAmount)
    },
  },
})

export const { addGoal, addDeposit } = goalsSlice.actions
export default goalsSlice.reducer
