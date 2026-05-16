import { AlertTriangle, Phone } from 'lucide-react';
import RedFlagCard from '../components/RedFlagCard';
import InteractiveVishingExample from '../components/InteractiveVishingExample';
import './AttackType.css';

export default function Vishing() {
  return (
    <div className="attack-page">
      {/* Header Section */}
      <section className="attack-header">
        <div className="container">
          <div className="header-content">
            <Phone size={64} />
            <h1>Vishing</h1>
            <p>How attackers use phone calls to impersonate trusted organizations</p>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Is Vishing?</h2>
          <div className="content-box">
            <p>
              Vishing stands for "voice phishing"—a social engineering attack conducted over the phone. 
              Attackers call and impersonate trusted organizations like the IRS, Social Security Administration, banks, or tech support to trick you into revealing sensitive information or making payments.
            </p>
            <p style={{ marginTop: '15px' }}>
              The goal is to create urgency and fear that compels you to act immediately without verifying the caller's identity. 
              These scams are particularly effective because voice communication creates a false sense of legitimacy and makes it harder to spot red flags.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Common tactics:</strong> Threats of arrest, account suspension, immediate payment demands, or requests to "stay on the line" while you go to the bank or store.
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
              title="Caller Claims to Be from IRS or SSA"
              description="The IRS and Social Security Administration do not initiate contact by phone. Legitimate officials contact you by mail first."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Demands Immediate Payment"
              description="Threatening jail time or account closure unless you pay immediately via gift cards, wire transfer, or cryptocurrency."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Asks You to Stay on the Line"
              description="'Don't hang up' or 'stay on the line while you go to the store/ATM.' Real organizations don't control you this way."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Threatens Arrest or Lawsuit"
              description="'You'll be arrested,' 'Your driver's license will be suspended,' or 'Legal action is pending.' These are fear tactics."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Requests Personal Information"
              description="Asking for Social Security number, bank account details, passwords, or credit card numbers. Legitimate organizations have this on file."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Tells You Not to Tell Anyone"
              description="'Don't tell your family,' 'This is confidential,' or 'Don't hang up and call anyone else.' Red flag for scam."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Generic Greetings or Caller ID Spoofing"
              description="Caller doesn't know your name, or caller ID shows a government agency number (scammers can spoof these)."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Unusual Payment Methods"
              description="Asking for payment via gift cards (iTunes, Google Play), wire transfer, cryptocurrency, or cash sent by courier."
            />
          </div>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="section interactive-section">
        <div className="container">
          <h2 className="section-title">Interactive Example</h2>
          <p className="section-subtitle">Hover over the attacker's suspicious statements to reveal the red flags in this simulated IRS vishing scam call.</p>
          <InteractiveVishingExample />
        </div>
      </section>

      {/* What to Do Section */}
      <section className="section action-section">
        <div className="container">
          <h2 className="section-title">What Should You Do During a Suspicious Call?</h2>
          <div className="action-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Hang Up Immediately</h3>
              <p>End the call. Do not follow any instructions or stay on the line.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Don't Press Any Numbers</h3>
              <p>Don't press 1, enter data, or follow any prompts from the caller.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Verify Independently</h3>
              <p>Look up the organization's official phone number and call them directly to ask about the issue.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Never Give Information</h3>
              <p>Never provide SSN, bank details, passwords, or payment info over an unsolicited call.</p>
            </div>
          </div>

          {/* Additional Tips */}
          <div style={{ 
            marginTop: '40px', 
            backgroundColor: 'var(--bg-secondary)', 
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--accent-green)',
            borderRadius: '8px',
            padding: '30px'
          }}>
            <h3 style={{ marginTop: 0 }}>Pro Tip: How to Report Vishing Scams</h3>
            <ul style={{ 
              listStyle: 'none', 
              paddingLeft: 0,
              marginTop: '15px'
            }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                <span><strong>FTC:</strong> Report at reportfraud.ftc.gov</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                <span><strong>FBI IC3:</strong> Report at ic3.gov</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                <span><strong>IRS Scams:</strong> Call 1-800-829-1040</span>
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', flexShrink: 0 }}>•</span>
                <span><strong>Local Police:</strong> File a police report</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
