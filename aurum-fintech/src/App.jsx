import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Markets from "./pages/Markets";

const Dashboard = lazy(() => import("./pages/Dashboard"));
import Loader from "./components/Loader";
import Signup from "./pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route path="/markets" element={<Markets />} />
    </Routes>
  );
}
