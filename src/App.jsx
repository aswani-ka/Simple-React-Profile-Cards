import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='grid gap-1'>
     <h1 className='font-semibold text-gray-700'>Profile Cards</h1>
     <Card img="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg" name="Steffy Johnson" dest="Software Developer" city="Bangalore"
     />
     <Card img="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg" name="Mathew Joy" dest="Project Manager" city="Hyderabad"
     />
     <Card img="https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg" name="Steffy Johnson" dest="Executive Head" city="Pune"
     />
    </div>
  )
}

export default App
