import React, { useState, useEffect } from 'react';
import './App.css';
import { reportWebVitals } from 'web-vitals';
import Ojas from './assets/Ojas.PNG';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <a 
              href="#home" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => setActiveLink('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => setActiveLink('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="image-container">
            <img 
              src={Ojas} 
              alt="Kumar Ojas" 
              className="profile-image"
            />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm Kumar Ojas</h1>
            <h2>Frontend Developer</h2>
            <p>I create beautiful and functional websites</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>  I'm a passionate Frontend Developer with a strong foundation in competitive programming. 
              Graduate of Indian Institute of Information Technology, Vadodara with a B.Tech in Information Technology. 
              I combine my problem-solving skills from competitive programming with creative frontend development 
              to build efficient and user-friendly web applications.</p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>C++/C</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            {/* Add more skills */}
          </ul>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Quiz app</h3>
            <p>A full-stack quiz website built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/Quizapp" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="quizapp-pi-five.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Todo App</h3>
            <p>A React-based todo application with features like task creation, categorization, due dates, and progress tracking.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Redux</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/Todoapp-react" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="todoapp-react-ashy.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p>A weather application that provides real-time weather information using OpenWeatherMap API. Includes features like 5-day forecast and location search.</p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>API Integration</span>
              <span>CSS3</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/weatherapp" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="weatherapp-hazel-eta.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Social Media Dashboard</h3>
            <p>A responsive dashboard that aggregates social media metrics and analytics from multiple platforms.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Chart.js</span>
              <span>REST APIs</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/Social-media-dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="social-media-dashboard-omega-beige.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Recipe Finder App</h3>
            <p>An application that helps users discover recipes based on available ingredients. Includes filtering and favoriting functionality.</p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/Recipe-app" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="recipe-app-eta-six.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          

          <div className="project-card">
            <h3>Food delivery  App</h3>
            <p>An application that allows users to track their food delivery orders and get real-time updates on their delivery status.</p>
            <div className="project-tech">
              <span>React</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/KumarOjas/Food-delievery-app" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="food-delievery-app-five.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: ojaskumargupta@gmail.com</p>
          <p>LinkedIn: https://linkedin.com/in/kumar-ojas-987610142/</p>
          <p>GitHub: github.com/KumarOjas</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Kumar Ojas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
