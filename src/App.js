import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
