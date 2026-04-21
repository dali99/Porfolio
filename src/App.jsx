import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollHelpers from './components/ScrollHelpers'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-brand-500/30">
      <ScrollHelpers />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Skills />
      </main>
      <Contact />
    </div>
  )
}

export default App
