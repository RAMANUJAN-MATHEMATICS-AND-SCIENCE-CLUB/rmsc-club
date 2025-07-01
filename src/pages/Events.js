import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events-page">
      <h1>Club Events</h1>

      <section className="event-section">
        <h2>Upcoming Events</h2>
        <div className="event-card">
          <h3>Tech Quiz 2025</h3>
          <p>Date: 10th August 2025</p>
          <p>Join us for a challenging and fun-filled tech quiz open to all students!</p>
        </div>
      </section>

      <section className="event-section">
        <h2>Past Events</h2>
        <div className="event-card">
          <h3>Science Fair 2024</h3>
          <p>Date: 5th March 2024</p>
          <p>A showcase of student-led science and technology projects.</p>
        </div>
        <div className="event-card">
          <h3>Workshop on AI</h3>
          <p>Date: 15th September 2023</p>
          <p>Hands-on workshop introducing students to the world of Artificial Intelligence.</p>
        </div>
      </section>
    </div>
  );
}

export default Events;
