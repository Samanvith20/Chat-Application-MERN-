import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Chatpage from "./pages/Chatpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
