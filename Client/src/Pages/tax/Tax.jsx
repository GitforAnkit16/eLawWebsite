
import "./Tax.css"
import React, { useState } from 'react';

function Tax() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categorie = [
    "GST and Other Indirect Tax",
    "Changes in Pvt Ltd Company",
    "Changes In Limited Liability Partnership",
    "Mandatory Annual Filings",
    "Labour Compliance",
    "Accounting & Tax",
    "Convert Your Business"



  ];

  return (
    <div className='Tax'>
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
                <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership"</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          <div className='profile'>
            <img src = "https://picsum.photos/200/300" alt="profile-dp"></img>
            <h3>John Snow</h3>
            <p>Specialization:-</p>
              <ul>
              <li>GST and Other Indirect Tax </li>
                <li>Changes in Pvt Ltd Company</li>
                <li>Changes In Limited Liability Partnership</li>
              </ul>
              <p>Location:- Bhubaneswar,Odisha,India</p>
               <button>Book An Appointment</button> 
          </div>
          
        </div>
      )}
    </div>
  );
}


export default Tax
