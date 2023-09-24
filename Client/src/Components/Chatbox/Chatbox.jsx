import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox({ selectedProfile }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="Chatbox">
      {selectedProfile ? (
        <>
          <div className="ChatHeader">
            <img src="https://picsum.photos/200/300" alt={selectedProfile.name} className="Avatar" />
            <h2>{selectedProfile.name}</h2>
          </div>
          <div className="MessageContainer">
            {messages.map((message, index) => (
              <div key={index} className={`Message ${message.sender === 'You' ? 'Sent' : 'Received'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="MessageInput">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      ) : (
        <p>Select a profile to start chatting.</p>
      )}
    </div>
  );
}

export default Chatbox;
