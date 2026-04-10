import React from "react";
import Chatbot from "./Chatbot";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const cardStyle = {
    width: "220px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "bold"
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #f0f9ff)",
        padding: "40px"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>🎓 Smart Campus Dashboard</h1>
        <h3>Welcome {user?.name || "Student"} 👋</h3>
        <button onClick={logout} style={{ marginTop: "10px", padding: "10px 20px" }}>
          Logout
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}
      >
        <div style={cardStyle} onClick={() => (window.location.href = "/attendance")}>
          📊 Attendance
        </div>

        <div style={cardStyle} onClick={() => (window.location.href = "/timetable")}>
          📅 Timetable
        </div>

        <div style={cardStyle} onClick={() => (window.location.href = "/announcements")}>
          📢 Announcements
        </div>

        <div style={cardStyle}>
          👤 Profile
        </div>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <Chatbot />
      </div>
    </div>
  );
}

export default Dashboard;