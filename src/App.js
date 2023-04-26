import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar';
import { BookingSummary } from './components/BookingSummary';
import { NoMatch } from './components/NoMatch';
import { Services } from './components/Services';


function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
      </div>
      <Routes>
          <Route path='/react-router-demo' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='booking-summary' element={<BookingSummary />} />
          <Route path='services' element={<Services />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </>
  );
}

export default App;
