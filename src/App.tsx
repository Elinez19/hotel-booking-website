import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotelsListPage from './pages/HotelsListPage';
import HotelDetailPage from './pages/HotelDetailPage';
import RoomsPage from './pages/RoomsPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsListPage />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;