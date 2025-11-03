import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="missionvision-section" id="mission">
      <h2 className="section-title">Our Mission & Vision</h2>
      <div className="missionvision-container">
        <div className="missionvision-card">
          <div className="missionvision-content">
            <h3>Mission 1</h3>
            <p>
              To serve humanity by promoting peace, compassion, and selfless
              service through spiritual practices and social welfare.
            </p>
          </div>
        </div>

        <div className="missionvision-card">
          <div className="missionvision-content">
            <h3>Vision</h3>
            <p>
              To create a society rooted in harmony, mindfulness, and kindness,
              where every individual lives with awareness and purpose.
            </p>
          </div>
        </div>

        <div className="missionvision-card">
          <div className="missionvision-content">
            <h3>Mission 2</h3>
            <p>
              To inspire inner transformation through meditation, yoga, and
              community programs that bring people closer to spiritual truth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
