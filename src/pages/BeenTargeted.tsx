import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './BeenTargeted.css';

interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
  expanded?: boolean;
}

export default function BeenTargeted() {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const toggleStep = (id: number) => {
    setExpandedSteps(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const steps: Step[] = [
    {
      id: 1,
      title: "Don't Panic",
      content: (
        <div className="step-content">
          <p>
            You are not alone. Millions of people become targets of phishing, smishing, and vishing attacks every year. 
            Attackers are sophisticated, and these scams are designed to fool people.
          </p>
          <p style={{ marginTop: '15px' }}>
            Acting quickly is important, but mistakes happen—what matters is what you do next. Take a deep breath and follow these steps carefully.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Stop All Contact",
      content: (
        <div className="step-content">
          <p>
            <strong>Do not respond further to the attacker.</strong> Stop all communication immediately.
          </p>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>Don't click any more links from the suspicious message or email</li>
            <li>Don't call any phone numbers provided by the attacker</li>
            <li>Don't reply to emails or texts</li>
            <li>Don't engage with the attacker in any way</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            Block the sender/caller if possible. Delete the message, email, or voicemail.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Secure Your Accounts",
      content: (
        <div className="step-content">
          <p>
            <strong>If you gave out passwords or credentials, change them immediately.</strong>
          </p>
          <div style={{ marginTop: '15px' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>Priority Changes:</h4>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>Change your email password (this is critical—email is the key to all other accounts)</li>
              <li>Change passwords for banking and financial accounts</li>
              <li>Change passwords for social media and important apps</li>
              <li>Change passwords for any other accounts that use the same password</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>Enable Two-Factor Authentication (2FA):</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Enable 2FA on your email account (use authenticator apps, not SMS if possible)</li>
              <li>Enable 2FA on your banking apps and financial institutions</li>
              <li>Enable 2FA on social media and other important accounts</li>
            </ul>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            💡 Tip: Use a password manager to create strong, unique passwords for each account.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Contact Your Bank (if Financial Info Was Shared)",
      content: (
        <div className="step-content">
          <p>
            <strong>Call your bank or credit card issuer immediately.</strong> Use the number on the back of your card, not any number provided by the attacker.
          </p>
          <div style={{ marginTop: '15px' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>Tell them:</h4>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>That you may have been a victim of phishing/smishing/vishing</li>
              <li>What information was compromised (if known)</li>
              <li>Ask them to monitor your account for suspicious activity</li>
              <li>Ask about freezing your account temporarily if needed</li>
              <li>Report any unauthorized charges immediately</li>
            </ul>
          </div>
          <p>
            Consider placing a <strong>fraud alert</strong> on your account so the bank contacts you before opening new accounts in your name.
          </p>
        </div>
      )
    },
    {
      id: 5,
      title: "Report It to Authorities",
      content: (
        <div className="step-content">
          <p>
            <strong>Report the incident to official agencies.</strong> Your report helps law enforcement identify and stop scammers.
          </p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>FTC (Federal Trade Commission)</h4>
              <p style={{ margin: 0 }}>Website: <strong>reportfraud.ftc.gov</strong></p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Report all scams, phishing, and identity theft</p>
            </div>
            
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>FBI Internet Crime Complaint Center (IC3)</h4>
              <p style={{ margin: 0 }}>Website: <strong>ic3.gov</strong></p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Report cybercrime, phishing, and fraud</p>
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>CISA (Cybersecurity and Infrastructure Security Agency)</h4>
              <p style={{ margin: 0 }}>Website: <strong>cisa.gov/report</strong></p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Report cybersecurity incidents</p>
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>IRS Phishing</h4>
              <p style={{ margin: 0 }}>Email: <strong>phishing@irs.gov</strong> (forward the phishing email)</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Report IRS-related phishing emails</p>
            </div>

            <div style={{ padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid var(--accent-cyan)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>Your Local Police Department</h4>
              <p style={{ margin: 0 }}>File a police report for fraud or identity theft in your local jurisdiction</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Monitor Your Credit",
      content: (
        <div className="step-content">
          <p>
            <strong>Watch your credit report closely for signs of identity theft.</strong>
          </p>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>Three Major Credit Bureaus:</h4>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li><strong>Equifax:</strong> 1-800-685-1111 or www.equifax.com</li>
              <li><strong>Experian:</strong> 1-888-397-3742 or www.experian.com</li>
              <li><strong>TransUnion:</strong> 1-800-680-7289 or www.transunion.com</li>
            </ul>
          </div>
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', borderLeft: '3px solid var(--accent-green)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-green)' }}>Recommended Actions:</h4>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Place a <strong>fraud alert</strong> (1-year protection from identity theft)</li>
              <li>Place a <strong>credit freeze</strong> (prevents new accounts without your permission)</li>
              <li>Check your free credit report at <strong>annualcreditreport.com</strong> (once per year, all three bureaus)</li>
              <li>Look for unauthorized accounts or suspicious activity</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Tell Someone You Trust",
      content: (
        <div className="step-content">
          <p>
            <strong>Don't feel embarrassed—tell a family member or close friend what happened.</strong>
          </p>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>They can help you stay on track with the recovery steps</li>
            <li>They can help you monitor your accounts</li>
            <li>They can alert you if they receive suspicious messages or calls claiming to be from you</li>
            <li>Scammers may try to impersonate you to others</li>
          </ul>
          <p style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
            Remember: These attacks are designed by professionals to fool people. You are not alone, and you are not at fault. 
            What matters now is that you're taking action to protect yourself.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="been-targeted">
      {/* Header */}
      <section className="targeted-header">
        <div className="container">
          <h1>I've Been Targeted</h1>
          <p>A step-by-step guide to respond if you believe you've been compromised</p>
        </div>
      </section>

      {/* Steps Container */}
      <section className="section">
        <div className="container">
          <p style={{ 
            fontSize: '1.05rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            If you've been targeted by a phishing, smishing, or vishing attack, follow these steps immediately.
          </p>
          
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.id} className="step-accordion">
                <button
                  className={`step-button ${expandedSteps.includes(step.id) ? 'expanded' : ''}`}
                  onClick={() => toggleStep(step.id)}
                >
                  <span className="step-number-badge">{step.id}</span>
                  <span className="step-title">{step.title}</span>
                  <ChevronDown size={24} className="chevron" />
                </button>
                
                {expandedSteps.includes(step.id) && (
                  <div className="step-expanded">
                    {step.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="section emergency-section">
        <div className="container">
          <h2 className="section-title">Emergency Resources</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '25px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent-amber)' }}>Identity Theft Hotline</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-cyan)', margin: '10px 0 0 0' }}>
                1-877-438-4338
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0 0 0' }}>
                Free resource from the FTC
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '25px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent-amber)' }}>FBI IC3</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-cyan)', margin: '10px 0 0 0' }}>
                ic3.gov
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0 0 0' }}>
                Report internet crime
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '25px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent-amber)' }}>FTC Report Fraud</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-cyan)', margin: '10px 0 0 0' }}>
                reportfraud.ftc.gov
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0 0 0' }}>
                Report all fraud types
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
