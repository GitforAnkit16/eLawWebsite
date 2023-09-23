import React, { useState } from 'react';
import './Arbitrators.css';

function Arbitrators() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categorie = [
    "Legal Arbitrators",
    "Labour Arbitrators",
    "Industry-Specific Arbitrators",
    "International Arbitrators",
    "Commercial Arbitrators",
    "Consumer Arbitrators",
    "Construction Arbitrators",
    "Securities Arbitrators",
    "Real Estate Arbitrators",
    "Sports Arbitrators",
    "Employment Arbitrators",
    "Intellectual Property Arbitrators",
    "Environmental Arbitrators",
    "Ad Hoc Arbitrators",
    "Court-Appointed Arbitrators",
    "Family Law Arbitrators";

  ];

  return (
    <div className='Arbitrators'>
      <div className='grid'>
        {categorie.map((category, index) => (
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
        <span className='header-Arbitratoryer'>Profiles for {activeCategory}</span>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Arbitrator</li>
                <li>Civil Arbitrator</li>
                <li>Family Arbitrator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Arbitrators;
