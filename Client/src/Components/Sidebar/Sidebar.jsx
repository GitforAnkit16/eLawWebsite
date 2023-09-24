import React from 'react';
import './Sidebar.css';

const profiles = [
  { id: 1, name: 'John', lastMessage: 'Hello', avatar: 'john.jpg' },
  { id: 2, name: 'Alice', lastMessage: 'Hi there!', avatar: 'alice.jpg' },
  { id: 3, name: 'Bob', lastMessage: 'How are you?', avatar: 'bob.jpg' },
  // Add more profiles as needed
];

function Sidebar({ onSelectProfile }) {
  return (
    <div className="Sidebar">
      <h2>Chats</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <button onClick={() => onSelectProfile(profile)}>
              <img src="https://picsum.photos/200/300" alt={profile.name} className="Avatar" />
              <div className="ProfileInfo">
                <div className="ProfileName">{profile.name}</div>
                <div className="LastMessage">{profile.lastMessage}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
