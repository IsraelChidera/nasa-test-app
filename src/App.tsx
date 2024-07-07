/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css';

import Navbar from './components/widgets/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import PictureOfTheDay from './pages/PictureOfTheDay';

function App() {

  return (
    <main>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/picture-of-the-day' element={<PictureOfTheDay />} />
      </Routes>
    </main>
  )
}

export default App
