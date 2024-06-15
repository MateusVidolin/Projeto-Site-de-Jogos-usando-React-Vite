import { useState } from 'react';
import '../css/HelpIcon.css';

const HelpIcon = ({ explanation }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="help-icon">
      <span
        onMouseEnter={() => setShowExplanation(true)}
        onMouseLeave={() => setShowExplanation(false)}
      >
        ❓
      </span>
      {showExplanation && (
        <div className="help-icon-content">
          {explanation}
        </div>
      )}
    </div>
  );
};

export default HelpIcon;
