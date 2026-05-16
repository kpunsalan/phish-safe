import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Shield size={28} />
          <span>PhishSafe</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/email-phishing" className="nav-link">Email Phishing</Link>
          </li>
          <li className="nav-item">
            <Link to="/smishing" className="nav-link">Smishing</Link>
          </li>
          <li className="nav-item">
            <Link to="/vishing" className="nav-link">Vishing</Link>
          </li>
          <li className="nav-item">
            <Link to="/been-targeted" className="nav-link">I've Been Targeted</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
