import React, { useState } from 'react';
import './Lawyers.css';

function Lawyers() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

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
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Law</li>
                <li>Civil Law</li>
                <li>Family Law</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
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
               <button>Book An Appointment</button> 
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Lawyers;
