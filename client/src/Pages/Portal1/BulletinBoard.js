import React from 'react';
import './BulletinBoard.css';

const announcements = [
  { id: 1, title: 'Announcement 1', content: 'Content for announcement 1' },
  { id: 2, title: 'Announcement 2', content: 'Content for announcement 2' },
  { id: 3, title: 'Announcement 3', content: 'Content for announcement 3' },
  // Add more announcements as needed
];

const BulletinBoard = () => {
  return (
    <div className="bulletin-board">
      <h2 className="bulletin-board-title">Bulletin Board</h2>
      <div className="announcements">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement">
            <h3 className="announcement-title">{announcement.title}</h3>
            <p className="announcement-content">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletinBoard;
