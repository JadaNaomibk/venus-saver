// src/components/GoalCard.jsx
import DepositForm from './DepositForm'

function getDaysRemaining(targetDate) {
  const today = new Date()
  const target = new Date(targetDate)
  const diffMs = target - today
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  return diffDays
}

function GoalCard({ goal }) {
  const { id, name, targetAmount, saved, targetDate } = goal
  const percent = targetAmount > 0 ? Math.round((saved / targetAmount) * 100) : 0
  const clampedPercent = Math.min(percent, 100)
  const daysRemaining = getDaysRemaining(targetDate)

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p>
        Saved: <strong>${saved.toFixed(2)}</strong> / ${targetAmount.toFixed(2)}
      </p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
      <p>{clampedPercent}% complete</p>
      <p>
        Target date: <strong>{targetDate}</strong>
      </p>
      <p>
        {daysRemaining > 0
          ? `${daysRemaining} days remaining`
          : 'Target date reached or passed'}
      </p>

      <DepositForm goalId={id} />
    </div>
  )
}

export default GoalCard
