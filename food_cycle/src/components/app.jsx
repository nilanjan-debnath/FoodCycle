import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../app.css";
import Header from "./Header";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      {/* Rest of your content */}
    </Router>
  );
}
