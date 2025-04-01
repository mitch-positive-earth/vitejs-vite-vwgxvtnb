import React from "react";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Huruma Connect Dashboard</h1>
      
      <div style={{ marginTop: "2rem" }}>
        <h2>📊 Key Stats</h2>
        <ul>
          <li>Total Users: <strong>--</strong></li>
          <li>Completed Onboarding: <strong>--</strong></li>
          <li>Assessment Progress: <strong>--</strong></li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>📄 User Reports</h2>
        <p>Click a user to view their health report.</p>
        {/* This will become a dynamic list later */}
      </div>
    </div>
  );
}
