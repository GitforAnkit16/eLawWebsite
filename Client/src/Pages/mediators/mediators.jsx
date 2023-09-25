import React, { useState } from 'react';
import './mediators.css';
import { useNavigate } from 'react-router-dom';
function Mediators() {
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
        <div className="df-mediators">
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

export default Mediators;
