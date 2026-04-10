import React, { useEffect, useState } from "react";
import axios from "axios";

function Timetable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/timetable/")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => (window.location.href = "/dashboard")}>
  ⬅ Back to Dashboard
</button>
      <h2>📅 Timetable</h2>

      <table border="1" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.subject}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
