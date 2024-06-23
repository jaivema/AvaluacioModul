import { Suspense, lazy } from 'react'
import { useState, useEffect } from 'react'
import './App.css'

// Works also with SSR as expected
const BookList = lazy(() => import('./BookList'))

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Lista de libros</h1>
        <ul>
          <Suspense fallback={<p>Loading books...</p>}>
            <BookList books={books} />
          </Suspense>
        </ul>
      </div>
    </>
  )
}

export default App
