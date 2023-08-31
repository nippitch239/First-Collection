import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct imports
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>,
  rootElement
);
