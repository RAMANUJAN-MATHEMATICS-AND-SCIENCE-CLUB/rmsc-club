import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team-page">
      <h1>Meet Our Team</h1>

      <section className="team-section">
        <h2>Mentor</h2>
        <div className="team-card">Dr. [Mentor Name] - Faculty Mentor</div>
      </section>

      <section className="team-section">
        <h2>Secretary</h2>
        <div className="team-card">[Secretary Name]</div>
      </section>

      <section className="team-section">
        <h2>Heads</h2>
        <div className="team-card">[Head 1 Name] - Technical Head</div>
        <div className="team-card">[Head 2 Name] - Media Head</div>
      </section>

      <section className="team-section">
        <h2>Coordinators</h2>
        <div className="team-card">[Coordinator 1 Name]</div>
        <div className="team-card">[Coordinator 2 Name]</div>
        <div className="team-card">[Coordinator 3 Name]</div>
      </section>
    </div>
  );
}

export default Team;