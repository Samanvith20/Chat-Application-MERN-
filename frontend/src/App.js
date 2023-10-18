import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Chatpage from "./pages/Chatpage";
import "./App.css"
const App = () => {
  return (
      <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
