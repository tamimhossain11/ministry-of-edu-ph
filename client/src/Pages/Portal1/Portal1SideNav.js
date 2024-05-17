import React from 'react';
import './Portal1SideNav.css';

const Portal1SideNav = ({ sections, onSectionChange }) => {
  return (
    <div className="portal1-side-nav">
      <ul className="nav-menu">
        {sections.map((section) => (
          <li key={section.key} className="nav-item">
            <button onClick={() => onSectionChange(section.key)}>
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portal1SideNav;
