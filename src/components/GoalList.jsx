// src/components/GoalList.jsx
import { useSelector } from 'react-redux'
import GoalCard from './GoalCard'

function GoalList() {
  const goals = useSelector((state) => state.goals.goals)

  if (goals.length === 0) {
    return (
      <div className="card">
        <h2>Your goals</h2>
        <p>No goals yet. Create one to start saving.</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Your goals</h2>
      <div className="goal-list">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  )
}

export default GoalList
