import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
);

export default AppRoutes;
