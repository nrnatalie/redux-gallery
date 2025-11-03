import React from "react";
import Filter from "./components/Filter";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🖼️ Redux Gallery</h1>
      <Filter />
      <Gallery />
    </div>
  );
}

export default App;
