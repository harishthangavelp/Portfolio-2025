import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Port from './Components/Port';
import Contact from './Components/Contact';
import Practice from './Practice';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Port />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/port" element={<Port />} />
        <Route path="/practice" element={<Practice />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App; // Ensure App is exported as default
