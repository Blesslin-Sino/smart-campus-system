import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/users/register", {
        name,
        email,
        password,
        role: "student"
      });

      alert("Registered Successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br /><br />

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;