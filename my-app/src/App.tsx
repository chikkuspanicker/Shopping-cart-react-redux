import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopHeaderComponent from "./components/TopHeaderComponent";
import ProductListComponent from "./components/ProductListComponent";

const App: React.FC = () => {
  return (
    <div className="app">
      <TopHeaderComponent />
      <ProductListComponent />
    </div>
  );
};

export default App;
