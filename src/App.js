import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";

const App = () => (
  <Router>
    <Layout>
      <AppRoutes />
    </Layout>
  </Router>
);

export default App;
