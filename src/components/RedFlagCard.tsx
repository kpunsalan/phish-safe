import { AlertTriangle } from 'lucide-react';
import './RedFlagCard.css';

interface RedFlagCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function RedFlagCard({ title, description, icon }: RedFlagCardProps) {
  return (
    <div className="red-flag-card">
      <div className="flag-header">
        {icon || <AlertTriangle size={24} />}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}
