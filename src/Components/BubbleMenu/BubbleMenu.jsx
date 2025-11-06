import React from 'react';
import './BubbleMenu.css';

function BubbleMenu({ activeProfile, setActiveProfile, profiles }) {
  const menuItems = [
    { id: 'one', label: 'one', emoji: '☆' },      
    { id: 'two', label: 'two', emoji: '★' },      
    { id: 'three', label: 'three', emoji: '☆' },  
    { id: 'four', label: 'four', emoji: '★' },    
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