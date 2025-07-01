import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Ramanujan Mathematics and Science Club</h1>
        <p>
          The Ramanujan Mathematics and Science Club (RMSC) is a vibrant student-led initiative at
          COEP Technological University that fosters a love for mathematics and science across
          disciplines. Named after the legendary mathematician Srinivasa Ramanujan, the club is
          dedicated to nurturing curiosity, critical thinking, and scientific enthusiasm.
        </p>
      </section>

      <section className="about-objectives">
        <h2>Objectives</h2>
        <ul>
          <li>🔍 Cultivate curiosity about the elegance and depth of mathematics and science</li>
          <li>📚 Familiarize students with various interdisciplinary branches</li>
          <li>🎤 Host lectures, workshops, and webinars by eminent personalities</li>
          <li>🏆 Organize innovative competitions, quizzes, and exhibitions</li>
          <li>🌱 Encourage research-oriented and project-based learning</li>
        </ul>
      </section>

      <section className="about-message">
        <h2>Why RMSC?</h2>
        <p>
          In an ever-evolving scientific world, RMSC serves as a bridge between classroom learning
          and practical understanding. Whether you're a math lover, a science geek, or someone just
          curious about how things work — RMSC has something for you.
        </p>
      </section>
    </div>
  );
};

export default About;
