// src/components/GoalForm.jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../features/goals/goalsSlice'

function GoalForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [targetDate, setTargetDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !targetAmount || !targetDate) return

    dispatch(addGoal({ name, targetAmount, targetDate }))

    setName('')
    setTargetAmount('')
    setTargetDate('')
  }

  return (
    <div className="card">
      <h2>Create a Savings Goal</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Goal name
          <input
            type="text"
            placeholder="Birthday trip, Emergency fund..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Target amount ($)
          <input
            type="number"
            min="1"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
        </label>

        <label>
          Target date
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </label>

        <button type="submit">Add goal</button>
      </form>
    </div>
  )
}

export default GoalForm
