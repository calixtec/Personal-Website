import logo from "../assets/IMG_2001.png";
import logo1 from "../assets/me.png";
import "../styles/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

export default function TopSection() {
    return (
        <header className="top-section">

            <div className="profile-container">
                
            <div className="profile-pic-wrapper">
  <img className="profile-pic" src={logo1} alt="Christopher Calixte" />
</div>


                <div className="nav-links">
                    <a href="/blog">Blog</a>
                    <a href="/about-me">About Me</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="nav-links2">

                    <h1 className="name">Christopher Calixte</h1>
                </div>

                <div className="nav-links2" >
                    <p className="tagline">Cybersecurity & Cloud Enthusiast</p>
                </div>

                <div className="nav-links2">
    <a href="https://www.linkedin.com/in/christopher-calixte-87bb56223/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="tech-icon" />
    </a>
    <a href="https://github.com/calixtec?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} size="2x" className="tech-icon" />
    </a>
    <a href="path/to/your/resume.pdf" download="Christopher_Calixte_Resume.pdf" aria-label="Download Resume" className="resume-link">
        <FontAwesomeIcon icon={faFileDownload} size="2x" className="tech-icon" />
        <span className="sr-only">Download Resume</span>
    </a>
</div>

            </div>
        </header>
    );
}

