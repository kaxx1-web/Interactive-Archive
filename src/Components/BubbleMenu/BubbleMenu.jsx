import React from 'react';
import './BubbleMenu.css';

function BubbleMenu({ activeProfile, setActiveProfile, profiles }) {
  const menuItems = [
    { id: 'karen', label: 'Karen', emoji: '📸' },
    { id: 'lisa', label: 'Lisa', emoji: '📚' },
    { id: 'twin', label: 'Twin', emoji: '🎮' },
    { id: 'lala', label: 'Lala', emoji: '🪣' },
  ];

  return (
    <div className="bubble-menu-container">
      <div className="bubble-menu">
        {menuItems.map(({ id, label, emoji }) => (
          <button
            key={id}
            onClick={() => setActiveProfile(id)}
            className={`bubble-menu-item ${activeProfile === id ? 'active' : ''}`}
            aria-label={label}
          >
            <span className="bubble-emoji">{emoji}</span>
            <span className="bubble-tooltip">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BubbleMenu;