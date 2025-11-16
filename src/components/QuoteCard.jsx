// src/components/QuoteCard.jsx
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/quote/quoteSlice'

function QuoteCard() {
  const dispatch = useDispatch()
  const { text, author, status, error } = useSelector((state) => state.quote)

  const handleNewQuote = () => {
    dispatch(fetchQuote())
  }

  return (
    <div className="card">
      <h2>Money mindset</h2>
      {status === 'loading' && <p>Loading quote...</p>}
      {status === 'failed' && <p className="error">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <p className="quote-text">“{text}”</p>
          <p className="quote-author">— {author}</p>
        </>
      )}
      <button onClick={handleNewQuote}>New quote</button>
    </div>
  )
}

export default QuoteCard
