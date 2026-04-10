import React, { useEffect, useState } from "react";
import axios from "axios";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/announcements/")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => (window.location.href = "/dashboard")}>
  ⬅ Back to Dashboard
</button>
      <h2>📢 Announcements</h2>

      {announcements.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px auto",
            width: "60%",
            borderRadius: "10px"
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Announcements;