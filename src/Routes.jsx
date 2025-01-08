import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout><Login /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>,
  },
  {
    path: "/user/:id",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "*",
    element: <Layout><ErrorPage /></Layout>,
  },
];

export default routes;
