import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Study from './components/Study'
import Tests from './components/Tests'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'study':
        return <Study />
      case 'tests':
        return <Tests />
      default:
        return <Home setCurrentSection={setCurrentSection} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {renderCurrentSection()}
      </main>
    </div>
  )
}

export default App
