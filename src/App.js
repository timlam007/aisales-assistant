import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
    <Dashboard></Dashboard>
      {/* <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
    </>
  );
}

export default App;
