import React, { useState } from 'react';
import './notaries.css';
import { useNavigate } from 'react-router-dom';
function Notaries() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const handleProfile = async () => {
    try{
        navigate("/profile");
     }catch(err){
        console.log(err);
     }
  }

  const med = [
    "Notary Public",
"Civil Law Notary",
"Common Law Notary",
"Notary at Sea (Notary Mariner)",
"Mobile Notary",
"Online Notary (eNotary)",
"Remote Online Notary (RON)",
"Notary Signing Agent (NSA)",
"Specialized Notary (e.g., Immigration Notary, Real Estate Notary)",
"Corporate Notary (In-House Notary)",
"Notary at Large (Notary-at-Large)",
"Notary at the Embassy (Consular Notary)",
"International Notary (Notary for International Documents)",
"Notary for the Deaf and Hard of Hearing (Deaf Notary)"



  ];

  return (
    <div className='Notaries'>
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
        <div className="df-notaries">
    <div className="cardq" onClick={(handleProfile)}>
      <img src="https://picsum.photos/200" alt=""  /><h3>Akshay Sahoo</h3><p>Lorem ipsum dolor sit.</p>
    </div>
    <div  className="cardq"> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p>
  </div>
    <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Immigration Notary</p></div>
    <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
    <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
    <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
    <div className="cardq"onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
    <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
    </div>
          
       
      )}
    </div>
  );
}

export default Notaries;
