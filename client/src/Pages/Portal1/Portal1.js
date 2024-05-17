import React, { useState } from 'react';
import Portal1SideNav from './Portal1SideNav';
import BulletinBoard from './BulletinBoard'; // Import the BulletinBoard component
import './portal1.css';

const sections = [
  { key: 'bulletin', name: 'Bulletin Board' }, // Add a new section for the bulletin board
  { key: 'calender', name: 'Calender' },
  { key: 'dashboard', name: 'Dashboard' },
  { key: 'contacts', name: 'Contacts' },
  { key: 'request_form', name: 'Request Form' },

  // Add more sections as needed
];

export const Portal1 = () => {
  const [activeSection, setActiveSection] = useState(sections[0].key);

  const renderContent = () => {
    switch (activeSection) {

       /* Bulletin*/ 
      case 'bulletin':
        return <BulletinBoard />;

        /* Calender*/ 
      case 'calender':
        return <div>
          <iframe
            src="https://www.wrike.com/shared/calendars/?calendar-view=true&token=eyJ0IjoiY3ZwIiwiYWxnIjoiSFM1MTIifQ.eyJhIjo2NDcwNTUxLCJyIjoiVVMiLCJpZCI6MTQ1MjM4NCwiZXhwIjozMjUwMzcwODgwMCwiaWF0IjoxNzE1OTMyODQ2fQ.IYxNtbooaP_pOvfBRe4tLrE476BrPG_9Iv4BZfo2B2SzCuzciNBK0eEGxiOahx4uKnkw88Sy3Ser8F8rfH5KKQ"
            title="Wrike Dashboard"
            width="100%"
            height="1000"
            frameBorder="0"
          />
        </div>;

        /* Dashboard*/        
      case 'dashboard':
        return (
          <iframe
            src="https://storage.www.wrike.com/analyze_public_link/YltRkTMOgrPBvFeg5AdGH5JFOzHgLaMoqK0vKfO6Tc83FKhAlii45bwa82KuO6D7?acc=6470551"
            title="Wrike Dashboard"
            width="100%"
            height="1000"
            frameBorder="0"
          />
        );

        /* Contacts*/        
      case 'contacts':
        return (
          <iframe
            src="https://storage.www.wrike.com/analyze_public_link/YltRkTMOgrPBvFeg5AdGH5JFOzHgLaMoqK0vKfO6Tc83FKhAlii45bwa82KuO6D7?acc=6470551"
            title="Wrike Dashboard"
            width="100%"
            height="1000"
            frameBorder="0"
          />
        );

        /* Request Form*/        
      case 'request_form':
        return (
          <iframe
          title="Request Form"
           width="100%" 
           height="768" 
           src="https://www.wrike.com/form/eyJhY2NvdW50SWQiOjY0NzA1NTEsInRhc2tGb3JtSWQiOjE0NDg5NjF9CTQ4Njk1NDQwOTMwNjIJOGRmYWNlYmY3NjhjNzc1MTUzMTllYTFlM2E3NmFjY2EyMTBiOGViZDJiMjkwZjRlNTY1OGI4NjBjZmU5ZDg5Nw==" frameborder="0"
           />

        );

      // Render the BulletinBoard component for the bulletin section
      // Add more cases for different sections
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="portal1">
      <Portal1SideNav sections={sections} onSectionChange={setActiveSection} />
      <div className="portal1-content">
        {renderContent()}
      </div>
    </div>
  );
};


