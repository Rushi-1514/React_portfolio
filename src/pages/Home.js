import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    console.log('Contact form submitted:', contactData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="home-page">
        <button id="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <section className="page">
          <h1>Rushikesh Karupothula</h1>
          <p>"Aspiring software engineer with a strong foundation in backend development, focused on building scalable and impactful web solutions."</p>

          <ul className="card-list">
            
         
            <li className="card">
              <Link to="/projects" className="hover-link"> <h2>Projects</h2></Link>
               
              <span className="card-sub">Hands-on Work</span>
              <p>• Breast Cancer Detection<br />• Maze Solving Robot<br />• Animatronic Eye<br />• Secure Data Logging with STM32</p>
            </li>
           
             <li className="card">
              <Link to="/skills" className="hover-link"><h2>Skills</h2></Link> 
              <span className="card-sub">Technologies I know</span>
              <p>C, C++, Python, SQL, HTML, CSS, Machine Learning, Embedded Systems</p>
            </li>
            <li className="card">
              <h2>Experience</h2>
              <span className="card-sub">Leadership Roles</span>
              <p>Logistics Head - Vasavi MUN<br />Captain - ECE Cricket Team<br />Head - Street Cause</p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
