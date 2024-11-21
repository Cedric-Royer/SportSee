import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/user/:id" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
