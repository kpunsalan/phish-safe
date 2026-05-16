import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import './InteractiveVishingExample.css';

interface VishingLine {
  id: string;
  speaker: 'attacker' | 'victim';
  text: string;
  tooltip?: string;
}

export default function InteractiveVishingExample() {
  const [hoveredFlag, setHoveredFlag] = useState<string | null>(null);

  const transcript: VishingLine[] = [
    {
      id: 'line1',
      speaker: 'attacker',
      text: "Hello, this is Agent Smith from the IRS. We've detected fraudulent activity on your Social Security number. You're about to be arrested if you don't act immediately.",
      tooltip: 'FALSE URGENCY: "Arrested" threat is a common vishing tactic. IRS never threatens arrest by phone. IMPERSONATION: IRS titles and generic names.'
    },
    {
      id: 'line2',
      speaker: 'victim',
      text: 'Wait, what? I haven\'t done anything wrong.'
    },
    {
      id: 'line3',
      speaker: 'attacker',
      text: 'Listen, we have records of you owing $15,000 in back taxes. But I can help you settle this right now. We accept payment by Google Play cards or wire transfer.',
      tooltip: 'RED FLAG: Demanding payment via gift cards or wire transfer—legitimate government agencies never do this. This is a classic scam indicator.'
    },
    {
      id: 'line4',
      speaker: 'victim',
      text: 'This doesn\'t sound right. Let me call the IRS directly.'
    },
    {
      id: 'line5',
      speaker: 'attacker',
      text: "No! If you hang up or call anyone else, your arrest warrant goes active immediately. Stay on the line with me. We need to verify your Social Security number and bank account details to resolve this.",
      tooltip: 'RED FLAG: "Don\'t tell anyone" and demanding to stay on the line. Legitimate organizations encourage you to verify independently. Also fishing for SSN and bank details.'
    },
    {
      id: 'line6',
      speaker: 'victim',
      text: '[Hangs up]'
    }
  ];

  return (
    <div className="vishing-example">
      <div className="transcript-container">
        {transcript.map((line) => (
          <div 
            key={line.id}
            className={`transcript-line ${line.speaker} ${line.tooltip ? 'flagged' : ''}`}
            onMouseEnter={() => line.tooltip && setHoveredFlag(line.id)}
            onMouseLeave={() => setHoveredFlag(null)}
          >
            <span className="speaker">{line.speaker === 'attacker' ? '🚨 Attacker' : '👤 Victim'}:</span>
            <span className={`message ${line.tooltip ? 'suspicious' : ''}`}>
              {line.text}
            </span>
            {line.tooltip && (
              <span className="flag-indicator">⚠️</span>
            )}
          </div>
        ))}
      </div>

      {/* Tooltips */}
      <div className="tooltips-container">
        {transcript.filter(line => line.tooltip).map((line) => (
          <div 
            key={line.id}
            className={`tooltip ${hoveredFlag === line.id ? 'visible' : ''}`}
          >
            <div className="tooltip-header">
              <AlertTriangle size={16} />
              <span>Red Flag Detected</span>
            </div>
            <p>{line.tooltip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
