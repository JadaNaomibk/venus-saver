// src/components/DepositForm.jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDeposit } from '../features/goals/goalsSlice'

function DepositForm({ goalId }) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!amount) return

    dispatch(addDeposit({ goalId, amount }))
    setAmount('')
  }

  return (
    <form className="deposit-form" onSubmit={handleSubmit}>
      <label>
        Add deposit
        <input
          type="number"
          min="1"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default DepositForm
