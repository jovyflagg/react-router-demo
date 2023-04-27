import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
//import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { BookingSummary } from './components/BookingSummary';
import { NoMatch } from './components/NoMatch';
import { Services } from './components/Services';
import { BridalPackages } from './components/BridalPackages';
import { WeddingPartyPackages } from './components/WeddingPartyPackages';
const LazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <>
      <div className="hero">
        <Navbar />
      </div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>} />
          <Route path='booking-summary' element={<BookingSummary />} />
          <Route path='booking-summary' element={<BookingSummary />} />
          <Route path='services' element={<Services />}> 
            <Route index element={<BridalPackages />} />
            <Route path='bridal-packages' element={<BridalPackages />} />
            <Route path='wedding-party-packages' element={<WeddingPartyPackages />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
    </>
  );
}

export default App;
