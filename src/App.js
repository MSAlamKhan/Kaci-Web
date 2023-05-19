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
// import { mainNavlinks } from "./constants/data";
import UserDetails from "./pages/UserDetails";
import UsersManagement from "./pages/UsersManagement";
import AndroidPromotion from "./pages/AndroidPromotion";
import IOSPromotion from "./pages/IOSPromotion";
import AmbulanceManagement from "./pages/AmbulanceManagement";
import IReportManagement from "./pages/IReportManagement";
import InfoBankManagement from "./pages/InfoBankManagement";
import SuggestionManagement from "./pages/SuggestionManagement";
import FeedbackManagement from "./pages/FeedbackManagment";
import ClimateManagement from "./pages/ClimateManagement";
import KaciCodeManagement from "./pages/KaciCodeManagement";

function App() {
  const user = useSelector((state) => state.user.email);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <AdminLayout /> : <Navigate to={"/login"} replace />}
        >
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/users-management">
            <Route index element={<UsersManagement />} />
            <Route
              path="/users-management/user-details/:id"
              element={<UserDetails />}
            />
          </Route>
          <Route
            path="/promotion-management/android"
            element={<AndroidPromotion />}
          />
          <Route path="/promotion-management/ios" element={<IOSPromotion />} />
          <Route
            path="/ambulance-management"
            element={<AmbulanceManagement />}
          />
          <Route path="/ireport-management" element={<IReportManagement />} />
          <Route path="/infobank-management" element={<InfoBankManagement />} />
          <Route path="/feedback-management" element={<FeedbackManagement />} />
          <Route path="/climate-management" element={<ClimateManagement />} />
          <Route
            path="/kaci-code-management"
            element={<KaciCodeManagement />}
          />
          <Route
            path="/suggestion-management"
            element={<SuggestionManagement />}
          />
        </Route>
        <Route path="/travel-safe" element={<TravelSafe />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="email-signup-otp" element={<EmailSignupOTP />} />
        <Route
          index
          path={"/login"}
          element={user ? <Navigate to={"/dashboard"} /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

/* {mainNavlinks.map(
  (route, indx) =>
    route.title !== "Promotion Management" &&
    route.title !== "Users Management" && (
      <Route
        key={route.title + indx}
        path={route.path}
        element={<ManagementPage title={route.title} />}
      />
    )
)} */

export default App;
