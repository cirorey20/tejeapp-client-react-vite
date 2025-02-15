import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          ¡Tailwind funciona!
        </h1>
        <button className="btn-custom mb-4">Botón</button>
        <div className="spinner"></div>
      </div>

    </>
  )
}

export default App
