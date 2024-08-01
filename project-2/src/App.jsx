import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navigation/Navbar'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'

function App() {

  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </>
  )
}

export default App
