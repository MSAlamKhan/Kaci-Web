import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login, Dashboard, EmailSignupOTP } from "./pages";
import { useSelector } from "react-redux";
import { AdminLayout } from "./components";
import TravelSafe from "./pages/TravelSafe";
import Emergency from "./pages/Emergency";

function App() {
  const user = useSelector((state) => state.user.email);

  return (
    <Router>
      <Routes>
        <Route
          index
          path={"/login"}
          element={user ? <Navigate to={"/dashboard"} /> : <Login />}
        />
        <Route
          path="/"
          element={user ? <AdminLayout /> : <Navigate to={"/login"} replace />}
        >
          <Route index path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/travel-safe" element={<TravelSafe />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="email-signup-otp" element={<EmailSignupOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
