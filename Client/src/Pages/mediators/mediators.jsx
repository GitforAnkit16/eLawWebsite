import React, { useState } from 'react';
import './mediators.css';

function Mediators() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const med = [
    "Family Mediators",
    "Divorce Mediators",
    "Workplace Mediators",
    "Employment Mediators",
    "Commercial Mediators",
    "Civil Mediators",
    "Community Mediators",
    "Environmental Mediators",
    "Victim-Offender Mediators",
    "International Mediators",
    "Peer Mediators (typically in schools)",
    "Elder Mediators",
    "Healthcare Mediators",
    "Land Use and Zoning Mediators",
    "Business Mediators",
    "Cross-Cultural Mediators",
    "Online or Virtual Mediators",
    "Court-Appointed Mediators",
    "Parenting Coordinators (in family disputes)"


  ];

  return (
    <div className='Mediator'>
      <div className='grid'>
        {med.map((category, index) => (
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
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
                <li>Criminal Mediator</li>
                <li>Civil Mediator</li>
                <li>Family Mediator</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Mediators;
