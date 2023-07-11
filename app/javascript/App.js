import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  console.log("Hello from App.js");
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/greeting" element={<Greeting/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;