import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Don't Take the Bait</h1>
          <p className="hero-subtitle">
            Cybersecurity awareness starts with knowledge. Learn to identify phishing, smishing, and vishing attacks 
            before they compromise your personal information and finances.
          </p>
        </div>
      </section>

      {/* Attack Types Cards */}
      <section className="section cards-section">
        <div className="container">
          <h2 className="section-title">Learn About Attack Types</h2>
          
          <div className="cards-grid">
            {/* Email Phishing Card */}
            <Link to="/email-phishing" className="attack-card">
              <div className="card-icon">
                <Mail size={48} />
              </div>
              <h3>Email Phishing</h3>
              <p>Deceptive emails designed to steal your credentials and personal information</p>
              <span className="card-cta">Learn More →</span>
            </Link>

            {/* Smishing Card */}
            <Link to="/smishing" className="attack-card">
              <div className="card-icon">
                <MessageSquare size={48} />
              </div>
              <h3>Smishing</h3>
              <p>SMS-based phishing attacks targeting your phone with malicious links</p>
              <span className="card-cta">Learn More →</span>
            </Link>

            {/* Vishing Card */}
            <Link to="/vishing" className="attack-card">
              <div className="card-icon">
                <Phone size={48} />
              </div>
              <h3>Vishing</h3>
              <p>Voice phishing calls impersonating legitimate organizations or authorities</p>
              <span className="card-cta">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Think You've Been Targeted?</h2>
          <p>We have a step-by-step guide to help you respond if you believe you've been compromised.</p>
          <Link to="/been-targeted" className="btn btn-primary btn-large">
            Get Help Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
