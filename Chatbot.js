import React, { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    let reply = "I didn't understand 🤖";

    if (message.toLowerCase().includes("attendance")) {
      reply = "Your attendance is 85%";
    } else if (message.toLowerCase().includes("timetable")) {
      reply = "Your next class is at 10 AM";
    } else if (message.toLowerCase().includes("hello")) {
      reply = "Hello! How can I help you?";
    }

    setChat([...chat, { user: message, bot: reply }]);
    setMessage("");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>🤖 AI Assistant</h3>

      <div style={{ border: "1px solid black", padding: "10px", height: "200px", overflowY: "scroll" }}>
        {chat.map((c, index) => (
          <div key={index}>
            <p><b>You:</b> {c.user}</p>
            <p><b>Bot:</b> {c.bot}</p>
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;