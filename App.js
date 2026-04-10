import React from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Attendance from "./Attendance";
import Timetable from "./Timetable";
import Announcements from "./Announcements";

function App() {
  const path = window.location.pathname;
  const user = localStorage.getItem("user");

  if (!user) {
    if (path === "/register") return <Register />;
    return <Login />;
  }

  if (path === "/dashboard") return <Dashboard />;
  if (path === "/attendance") return <Attendance />;
  if (path === "/timetable") return <Timetable />;
  if (path === "/announcements") return <Announcements />;

  return <Dashboard />;
}

export default App;