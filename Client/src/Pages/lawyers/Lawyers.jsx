import React, { useState } from 'react';
import './Lawyers.css';
import { useNavigate } from 'react-router-dom';
function Lawyers() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const navigate = useNavigate();

  const handleBookAppointmentClick = async () => {
      try{
          navigate("/appointment");
       }catch(err){
          console.log(err);
       }
  }
  const handleChatClick = async () => {
    try{
        navigate("/messages");
     }catch(err){
        console.log(err);
     }
}
  const categories = [
    "Criminal Law",
    "Civil Law",
    "Constitutional Law",
    "Administrative Law",
    "Family Law",
    "Environmental Law",
    "International Law",
    "Contract Law",
    "Tort Law",
    "Property Law",
    "Employment Law",
    "Intellectual Property Law",
    "Banking and Finance Law",
    "Healthcare Law",
    "Criminal Procedure Law",
    "Entertainment Law",
    "Military Law",
    "Tax Law"
  ];

  return (
    <div className='lawyers'>
      <div className='grid'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <span>{category}</span>
          </div>
        ))}
      </div>
      {activeCategory && (
        <div className='profiles'>
        <span className='header-lawyer'>Profiles for {activeCategory}</span>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John </h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
              
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button> 
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
              <button onClick={handleBookAppointmentClick}>Book An Appointment</button>
              <button >View Profile</button>
              <button onClick={handleChatClick}>Chat with Lawyer</button>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Lawyers;
