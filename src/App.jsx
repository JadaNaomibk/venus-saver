// src/App.jsx
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'
import QuoteCard from './components/QuoteCard'
import { fetchQuote } from './features/quote/quoteSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Venus Saver</h1>
        <p>Micro-savings goals with target dates and progress.</p>
      </header>

      <main className="app-main">
        <section className="left-column">
          <GoalForm />
          <QuoteCard />
        </section>
        <section className="right-column">
          <GoalList />
        </section>
      </main>
    </div>
  )
}

export default App
