
import "./license.css"
import React, { useState } from 'react';

function Licenses() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categorie = [
    "Digital Signature Certificate",
    "Udyam Registration",
    "MSME Registration",
    "ISO Certification",
    "FSSAI [Food License]",
    "IEC [Import/Export Code]",
    "Apeda RCMC",
    "Spice Board Registration",
    "FIEO Registration",
    "Legal Metrology",
    "Hallmark Registration",
    "BIS Registration",
    "Gun Licence",
    "Liquor Licence"


  ];

  return (
    <div className='Licences'>
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
                <li>BIS Registration</li>
                    <li>Gun Licence</li>
                    <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
                    <li>Gun Licence</li>
                    <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
                    <li>Gun Licence</li>
                    <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
                    <li>Gun Licence</li>
                    <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
                    <li>Gun Licence</li>
                    <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
              <li>Gun Licence</li>
              <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
              <li>Gun Licence</li>
              <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
              <li>Gun Licence</li>
              <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>BIS Registration</li>
              <li>Gun Licence</li>
              <li>Liquor Licence</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          
        </div>
      )}
    </div>
  );
}


export default Licenses
