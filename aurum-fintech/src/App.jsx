import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/markets" element={<Markets />} />
    </Routes>
  );
}
