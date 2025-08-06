import React from 'react';

const Skills = () => {
  return (
    <div className="container">
      <section className="page">
        <h1>💼 My Skills</h1>
        
        <ul className="card-list">
          <li className="card">
            <h2>Programming Languages</h2>
            <span className="card-sub">Core Technologies</span>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </li>

          <li className="card">
            <h2>Technologies & Frameworks</h2>
            <span className="card-sub">Tools & Libraries</span>
            <ul>
              <li>Machine Learning</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Arduino</li>
            </ul>
          </li>

          <li className="card">
            <h2>Hardware & Systems</h2>
            <span className="card-sub">Electronics & IoT</span>
            <ul>
              <li>STM32</li>
              <li>IR Sensors</li>
              <li>Servo Motors</li>
              <li>System on Chip (SoC)</li>
              <li>IoT Development</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
