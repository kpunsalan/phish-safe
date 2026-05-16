import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import './InteractiveEmailExample.css';

interface FlaggedElement {
  id: string;
  text: string;
  tooltip: string;
  element: string;
}

export default function InteractiveEmailExample() {
  const [hoveredFlag, setHoveredFlag] = useState<string | null>(null);

  const flags: FlaggedElement[] = [
    {
      id: 'sender',
      text: 'noreply@paypa1.com',
      tooltip: 'The email address contains "paypa1" (with a "1" instead of "l"). Real PayPal uses @paypal.com',
      element: 'sender'
    },
    {
      id: 'greeting',
      text: 'Dear Valued Customer',
      tooltip: 'Generic greeting instead of your real name. Legitimate companies usually personalize emails.',
      element: 'greeting'
    },
    {
      id: 'urgency',
      text: 'URGENT: Your account will be suspended in 24 hours',
      tooltip: 'Creates false urgency to pressure you into acting without thinking. A major red flag.',
      element: 'urgency'
    },
    {
      id: 'link',
      text: 'VERIFY ACCOUNT →',
      tooltip: 'Links often go to fake websites. Hover over or right-click links to see the real URL.',
      element: 'button'
    }
  ];

  return (
    <div className="email-example">
      <div className="email-container">
        {/* Email Header */}
        <div className="email-header">
          <span className="email-from">
            From: <span 
              className={`flagged ${hoveredFlag === 'sender' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredFlag('sender')}
              onMouseLeave={() => setHoveredFlag(null)}
            >
              noreply@paypa1.com
            </span>
          </span>
          <span className="email-date">Today, 2:45 PM</span>
        </div>

        {/* Email Subject */}
        <div className="email-subject">
          Subject: ⚠️ ACTION REQUIRED: Verify Your PayPal Account Immediately
        </div>

        {/* Email Body */}
        <div className="email-body">
          <p>
            <span 
              className={`flagged ${hoveredFlag === 'greeting' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredFlag('greeting')}
              onMouseLeave={() => setHoveredFlag(null)}
            >
              Dear Valued Customer,
            </span>
          </p>

          <p style={{ marginTop: '15px' }}>
            <span 
              className={`flagged urgency ${hoveredFlag === 'urgency' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredFlag('urgency')}
              onMouseLeave={() => setHoveredFlag(null)}
            >
              URGENT: Your account will be suspended in 24 hours
            </span>
            unless you verify your information immediately.
          </p>

          <p style={{ marginTop: '15px' }}>
            We noticed unusual activity on your account. For your security, please verify your identity by clicking the button below.
          </p>

          <button 
            className={`email-button flagged ${hoveredFlag === 'button' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredFlag('button')}
            onMouseLeave={() => setHoveredFlag(null)}
          >
            VERIFY ACCOUNT →
          </button>

          <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Thank you,<br/>
            PayPal Security Team
          </p>
        </div>
      </div>

      {/* Tooltips */}
      <div className="tooltips-container">
        {flags.map((flag) => (
          <div 
            key={flag.id}
            className={`tooltip ${hoveredFlag === flag.id ? 'visible' : ''}`}
          >
            <div className="tooltip-header">
              <AlertTriangle size={16} />
              <span>Red Flag Detected</span>
            </div>
            <p>{flag.tooltip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
