import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Root: React.FC = () => {
  const isAuthenticated = localStorage.getItem("authToken");

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute isAuthenticated={!!isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Root;
