import { useState } from 'react'
import MemoryCard from './components/MemoryCard'
import "./App.css"

function App() {
 
  const cards = []
  for (let i=0;i<12;i++) {
    cards.push(<MemoryCard></MemoryCard>)
  }


  return (
    <div className="container">
      {cards}
    </div>
  )
}

export default App
