import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import './InteractiveSMSExample.css';

interface SMSFlag {
  id: string;
  text: string;
  tooltip: string;
  isSuspicious: boolean;
}

export default function InteractiveSMSExample() {
  const [hoveredFlag, setHoveredFlag] = useState<string | null>(null);

  const messages: SMSFlag[] = [
    {
      id: 'msg1',
      text: 'Unknown: 📦 UPS Package Delivery Alert: Your package failed to deliver. Claim it here: upsdelivery-confirm.click/pkg123',
      tooltip: 'Shortened URL (bit.ly, etc.) in a text claiming to be from UPS. UPS would use their official domain. Also "failed to deliver" creates urgency.',
      isSuspicious: true
    },
    {
      id: 'msg2',
      text: 'You: [No response]',
      tooltip: '',
      isSuspicious: false
    },
    {
      id: 'msg3',
      text: 'Unknown: ⚠️ URGENT: Your bank account has been locked. Verify identity immediately: bit.ly/bankverify',
      tooltip: 'Another shortened URL + urgent language. Banks would never text you asking to verify via a link.',
      isSuspicious: true
    },
    {
      id: 'msg4',
      text: 'Unknown: Congratulations! You won a $500 Amazon gift card! Claim it now: amazongiftcard-claim.net',
      tooltip: 'Too good to be true. You didn\'t enter any contest. Fake domain (.net instead of .com). Pressure to act immediately.',
      isSuspicious: true
    },
  ];

  return (
    <div className="sms-example">
      <div className="phone-mockup">
        <div className="phone-header">
          <span>9:42</span>
        </div>
        <div className="conversation">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isSuspicious ? 'suspicious' : 'user'}`}>
              {msg.isSuspicious && (
                <div 
                  className={`message-text flagged ${hoveredFlag === msg.id ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredFlag(msg.id)}
                  onMouseLeave={() => setHoveredFlag(null)}
                >
                  {msg.text}
                </div>
              )}
              {!msg.isSuspicious && (
                <div className="message-text">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltips */}
      <div className="tooltips-container">
        {messages.filter(m => m.isSuspicious).map((msg) => (
          <div 
            key={msg.id}
            className={`tooltip ${hoveredFlag === msg.id ? 'visible' : ''}`}
          >
            <div className="tooltip-header">
              <AlertTriangle size={16} />
              <span>Red Flag Detected</span>
            </div>
            <p>{msg.tooltip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
