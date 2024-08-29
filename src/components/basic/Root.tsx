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
        element={isAuthenticated ? <Dashboard /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/*"
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
