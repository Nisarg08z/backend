import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJookes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJookes(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>
      <h1>jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>Id: {joke.id}</h3>
            <h3>Title: {joke.title}</h3>
            <h3>Content: {joke.content}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
