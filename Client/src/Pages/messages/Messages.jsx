import React,{useState} from 'react';
import "./Messages.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chatbox from '../../Components/Chatbox/Chatbox';
function Messages() {
    const [selectedProfile, setSelectedProfile] = useState(null);
  return (
   
    <div className="Messages">
      <div className="ChatAppContainer">
        <Sidebar onSelectProfile={setSelectedProfile} />
        {selectedProfile && <Chatbox selectedProfile={selectedProfile} />}
      </div>
    </div>
  )
}

export default Messages