import { AlertTriangle, Mail } from 'lucide-react';
import RedFlagCard from '../components/RedFlagCard';
import InteractiveEmailExample from '../components/InteractiveEmailExample';
import './AttackType.css';

export default function EmailPhishing() {
  return (
    <div className="attack-page">
      {/* Header Section */}
      <section className="attack-header">
        <div className="container">
          <div className="header-content">
            <Mail size={64} />
            <h1>Email Phishing</h1>
            <p>How attackers use deceptive emails to steal your personal information</p>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Is Email Phishing?</h2>
          <div className="content-box">
            <p>
              Email phishing is a social engineering attack where cybercriminals send fraudulent emails that appear to come from legitimate organizations. 
              These emails trick you into revealing sensitive information like passwords, credit card numbers, or Social Security numbers—or into clicking links that lead to malware.
            </p>
            <p style={{ marginTop: '15px' }}>
              Attackers often impersonate trusted brands like PayPal, Amazon, banks, the IRS, or your email provider. The goal is to create urgency or fear that compels you to act quickly without thinking critically.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Stat:</strong> According to the FBI, phishing attacks cost individuals and organizations billions of dollars annually and remain the #1 initial attack vector in data breaches.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="section red-flags-section">
        <div className="container">
          <h2 className="section-title">Red Flags to Watch For</h2>
          <div className="red-flags-grid">
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Mismatched Sender Address"
              description="The email address doesn't match the organization. For example, support@amazon.co.uk or paypal-security@email.com instead of official domains."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Generic Greeting"
              description="'Dear Customer' or 'Dear User' instead of your actual name. Legitimate companies usually personalize emails."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Urgent or Threatening Language"
              description="'Act now or your account will be closed,' 'Verify immediately,' or 'Your password has been compromised.'"
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Suspicious Links or Attachments"
              description="Unexpected attachments or links to external websites. Hover over links to see the real URL—it often won't match the organization's domain."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Poor Grammar or Spelling"
              description="Professional companies proofread their emails. Multiple typos or awkward phrasing is a red flag."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Requests for Personal Information"
              description="Legitimate companies never ask for passwords, credit card numbers, or Social Security numbers via email."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Unusual Sender Behavior"
              description="An email from 'your bank' asking you to confirm details when you haven't requested anything."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Mismatched or Suspicious URLs"
              description="Right-click links and check where they actually lead. The visible text may say PayPal.com but link to malware.com."
            />
          </div>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="section interactive-section">
        <div className="container">
          <h2 className="section-title">Interactive Example</h2>
          <p className="section-subtitle">Hover over the flagged elements in the email below to reveal why they're suspicious.</p>
          <InteractiveEmailExample />
        </div>
      </section>

      {/* What to Do Section */}
      <section className="section action-section">
        <div className="container">
          <h2 className="section-title">What Should You Do?</h2>
          <div className="action-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Don't Click or Reply</h3>
              <p>Don't click any links or download attachments. Don't reply to the email.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Verify Directly</h3>
              <p>Contact the organization using contact info from their official website—not from the email.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Report It</h3>
              <p>Forward the email to the organization's security team or to phishing@irs.gov (for IRS scams).</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delete It</h3>
              <p>Delete the email. If you're unsure, reach out to the official organization directly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
