import React from 'react';


const Projects = () => {
  return (
    <div className="container">
      <section className="page">
        <h1>🚀 My Projects</h1>

        {/* Machine Learning & AI Projects */}
        <div className="project-section">
          <h2 className="section-title">🤖 Machine Learning & AI</h2>
          <ul className="card-list">
            <li className="card">
              <h3>🧠 Breast Cancer Detection and Classification <span style={{ float: 'right' }}></span></h3>
              <span className="card-sub">Google Colab, CNN, Python</span>
              <p>
                Engineered a machine learning model to classify breast cancer tumors into benign and malignant,
                achieving 92% accuracy using convolutional neural networks (CNNs).
              </p>
              <p><strong>Skills:</strong> Python, Machine Learning, Artificial Intelligence</p>
              <a href="https://github.com/Rushi-1514/Breast-cancer-classification-and-segmentation-using-CNN" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* Web Development Projects */}
        <div className="project-section">
          <h2 className="section-title">💻 Web Development</h2>
          <ul className="card-list">
            <li className="card">
              <h3>Blog website <span style={{ float: 'right' }}></span></h3>
              <span className="card-sub">Express, Node.js, PostgreSQL</span>
              <p>
             Developed a full-stack blog platform where users can create, edit, and delete blog posts. Built using Express and PostgreSQL with EJS templating and RESTful routes for managing blog data
              </p>
              
              <a href="https://github.com/Rushi-1514/capstone-blog_website" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>

            <li className="card">
              <h3>Book Collection <span style={{ float: 'right' }}></span></h3>
             <span className="card-sub">Express, Node.js, PostgreSQL</span>
              <p>
               Developed a responsive platform to add and review books you have read. Used PostgreSQL to store and retrieve reviews and integrated backend with Express for data management
              </p>

              <a href="https://github.com/Rushi-1514/capstone_book_collection" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>
                 <li className="card">
              <h3>📲 To do List <span style={{ float: 'right' }}></span></h3>
              <span className="card-sub">Express, Node.js, PostgreSQL</span>
              <p>
               Designed a cross-platform to-do list app that allows users to add tasks, mark them as completed, and delete them. Data is stored and managed using PostgreSQL, ensuring persistent task tracking across sessions.
              </p>
             
              <a href="https://github.com/Rushi-1514/To-do-list" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>
          </ul>
        </div>

        {/* Robotics & Embedded Systems */}
        <div className="project-section">
          <h2 className="section-title">🔧 Robotics & Embedded Systems</h2>
          <ul className="card-list">
            <li className="card">
              <h3>🤖 Autonomous Maze Solving Robot <span style={{ float: 'right' }}></span></h3>
              <span className="card-sub">Raspberry Pi, RealVNC, Python</span>
              <p>
                Developed an autonomous robot using the Rapidly-exploring Random Tree (RRT) algorithm to navigate
                and determine the shortest path through complex mazes.
              </p>
              <p><strong>Skills:</strong> Embedded Systems, Path Planning, Python</p>
              <a href="https://github.com/Rushi-1514/Smart-Maze-solving-robot" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>

            <li className="card">
              <h3>📈 ADC Driver for Secure Data Logging (ARM Cortex-M4F) <span style={{ float: 'right' }}></span></h3>
              <span className="card-sub">STM32F446RE, Keil, RTOS</span>
              <p>
                Designed a low-power embedded system with real-time ADC data logging and UART-based communication.
                Implemented on STM32F446RE using ARM Cortex-M4F, ensuring efficient data acquisition.
              </p>
              <p><strong>Skills:</strong> ARM Microcontroller, Embedded C, RTOS</p>
              <a href="https://github.com/Rushi-1514/ADC-driver-for-secure-data-logging-using-STM32F446RE" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Repository
              </a>
            </li>
       
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;