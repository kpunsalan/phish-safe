import { AlertTriangle, MessageSquare } from 'lucide-react';
import RedFlagCard from '../components/RedFlagCard';
import InteractiveSMSExample from '../components/InteractiveSMSExample';
import './AttackType.css';

export default function Smishing() {
  return (
    <div className="attack-page">
      {/* Header Section */}
      <section className="attack-header">
        <div className="container">
          <div className="header-content">
            <MessageSquare size={64} />
            <h1>Smishing</h1>
            <p>How attackers use SMS and text messages to compromise your security</p>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Is Smishing?</h2>
          <div className="content-box">
            <p>
              Smishing stands for "SMS phishing"—a social engineering attack delivered via text message instead of email. 
              Attackers send fraudulent SMS messages that appear to come from legitimate organizations like banks, delivery services, or government agencies.
            </p>
            <p style={{ marginTop: '15px' }}>
              These messages often contain shortened URLs that lead to fake websites designed to steal your login credentials, payment information, or personal data. 
              The attack exploits the fact that people often trust text messages more than emails and are less likely to scrutinize them.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Common targets:</strong> Package delivery (UPS, FedEx, USPS), banking, cryptocurrency wallets, and government benefits.
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
              title="Unknown Sender"
              description="A text from an unknown number claiming to be from your bank, UPS, or Amazon. Legitimate companies use known phone numbers."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Shortened URLs"
              description="Links using shorteners like bit.ly, tinyurl, or suspicious domains instead of official company domains."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Pressure to Act Immediately"
              description="'Click now or lose access,' 'Verify immediately,' or 'Your account has been compromised.'"
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Requests to Call a Number"
              description="'Call this number to verify your account' instead of using official customer service numbers."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Prize or Reward Claims"
              description="'You've won a prize' or 'Claim your $500 reward' that you didn't actually enter or win."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Impersonating Official Services"
              description="Messages claiming to be from delivery companies, banks, government agencies, or tech support."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Generic Language"
              description="'Customer' or 'User' instead of your name, or awkward phrasing that doesn't match the official company's style."
            />
            <RedFlagCard 
              icon={<AlertTriangle size={24} />}
              title="Unusual Message Format"
              description="Multiple emojis, strange spacing, or formatting that looks unprofessional."
            />
          </div>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="section interactive-section">
        <div className="container">
          <h2 className="section-title">Interactive Example</h2>
          <p className="section-subtitle">Hover over the suspicious messages below to reveal why they're red flags.</p>
          <InteractiveSMSExample />
        </div>
      </section>

      {/* What to Do Section */}
      <section className="section action-section">
        <div className="container">
          <h2 className="section-title">What Should You Do?</h2>
          <div className="action-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Don't Click the Link</h3>
              <p>Never click links in suspicious texts. Don't call numbers provided in the message.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Verify Independently</h3>
              <p>Contact the organization using a phone number or website you know is legitimate (from official materials).</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Report It</h3>
              <p>Forward the message to 7726 (SPAM) or report it to your carrier and the FTC at reportfraud.ftc.gov.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delete and Block</h3>
              <p>Delete the message and block the sender if possible. Don't engage with the attacker.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
