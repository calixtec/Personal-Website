// src/components/TechStack.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTerminal,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDocker,
  faPython,
  faJava,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

export default function TechStack() {
  return (
    <div>
      <h2 className="title-style">Tech Stack</h2>
      <table className="tech-table">
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faCloud} size="3x" className="tech-icon" /></td>
            <td><FontAwesomeIcon icon={faTerminal} size="3x" className="tech-icon" /></td>
            <td><FontAwesomeIcon icon={faDocker} size="3x" className="tech-icon" /></td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faPython} size="3x" className="tech-icon" /></td>
            <td><FontAwesomeIcon icon={faJava} size="3x" className="tech-icon" /></td>
            <td><FontAwesomeIcon icon={faDatabase} size="3x" className="tech-icon" /></td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faAws} size="3x" className="tech-icon" /></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}