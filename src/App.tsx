import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="container">
      <Popup />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
