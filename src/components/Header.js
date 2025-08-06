import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">My Portfolio</Link>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://drive.google.com/file/d/1jIP4R60GZkaIkCBJjpwRwz6CKo7hIgxl/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </li>


              <li>

                    <div className="social-links">
                  <a href="https://www.linkedin.com/in/rushikesh-karupothula-2a41b3270/" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Rushi-1514" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                </a>
                <a href="mailto:rushikeshdnani@email.com">
                  <i className="fas fa-envelope"></i>
                </a>

              </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
