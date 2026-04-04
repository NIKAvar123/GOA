import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;