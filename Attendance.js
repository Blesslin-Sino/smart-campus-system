import React, { useState, useEffect } from "react";
import axios from "axios";

function Attendance() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const markAttendance = async () => {
    await axios.post("http://localhost:8080/api/attendance/mark", { name });
    fetchAttendance();
  };

  const fetchAttendance = async () => {
    const res = await axios.get("http://localhost:8080/api/attendance/");
    setList(res.data);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => (window.location.href = "/dashboard")}>
  ⬅ Back to Dashboard
</button>
      <h2>📊 Attendance</h2>

      <input
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={markAttendance}>Mark Attendance</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;