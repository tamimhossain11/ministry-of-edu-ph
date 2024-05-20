import React, { useState } from 'react';
import Portal1SideNav from './Portal1SideNav';
import BulletinBoard from './BulletinBoard'; // Import the BulletinBoard component
import './portal1.css';

const sections = [
  { key: 'bulletin', name: 'Bulletin Board' },
  { key: 'calendar', name: 'Calendar' },
  { key: 'dashboard', name: 'Dashboard' },
  { key: 'contracts', name: 'Contracts' },
  { key: 'request_form', name: 'Request Form' },
  // Add more sections as needed
];

// Define PDFs with their URLs
const pdfFiles = [
  { key: 'contract1', name: 'Contract 1', url: '../../resources/contracts/contract1 (1).pdf' },
  { key: 'contract2', name: 'Contract 2', url: '../../resources/contracts/contract1 (2).pdf' },
  { key: 'contract3', name: 'Contract 3', url: '../../resources/contracts/contract1 (3).pdf' },
];

export const Portal1 = () => {
  const [activeSection, setActiveSection] = useState(sections[0].key);
  const [activePdf, setActivePdf] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case 'bulletin':
        return <BulletinBoard />;
      case 'calendar':
        return (
          <div>
            <iframe
              src="https://www.wrike.com/shared/calendars/?calendar-view=true&token=eyJ0IjoiY3ZwIiwiYWxnIjoiSFM1MTIifQ.eyJhIjo2NDcwNTUxLCJyIjoiVVMiLCJpZCI6MTQ1MjM4NCwiZXhwIjozMjUwMzcwODgwMCwiaWF0IjoxNzE1OTMyODQ2fQ.IYxNtbooaP_pOvfBRe4tLrE476BrPG_9Iv4BZfo2B2SzCuzciNBK0eEGxiOahx4uKnkw88Sy3Ser8F8rfH5KKQ"
              title="Wrike Dashboard"
              width="100%"
              height="1000"
              frameBorder="0"
            />
          </div>
        );
      case 'dashboard':
        return (
          <iframe
            src="https://www.wrike.com/frontend/wrike_analyze_board_export_preview_app/index.html?reportId=74627746"
            title="Wrike Dashboard"
            width="100%"
            height="1000"
            frameBorder="0"
          />
        );
      case 'contracts':
        return (
          <div>
            <h2>Select a contract to view:</h2>
            <ul>
              {pdfFiles.map(pdf => (
                <li key={pdf.key}>
                  <button onClick={() => setActivePdf(pdf)}>View {pdf.name}</button>
                </li>
              ))}
            </ul>
            {activePdf && (
              <div className="pdf-viewer">
                <iframe
                  title="PDF Viewer"
                  src={activePdf.url}
                  width="100%"
                  height="800"
                  frameBorder="0"
                />
              </div>
            )}
          </div>
        );
      case 'request_form':
        return (
          <iframe
            title="Request Form"
            width="100%"
            height="769"
            src="https://www.wrike.com/form/eyJhY2NvdW50SWQiOjY0NzA1NTEsInRhc2tGb3JtSWQiOjE0NDg5NjF9CTQ4Njk1NDQwOTMwNjIJOGRmYWNlYmY3NjhjNzc1MTUzMTllYTFlM2E3NmFjY2EyMTBiOGViZDJiMjkwZjRlNTY1OGI4NjBjZmU5ZDg5Nw=="
            frameBorder="0"
          />
        );
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
