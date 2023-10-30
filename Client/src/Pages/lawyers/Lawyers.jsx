import React, { useState } from 'react';
import './Lawyers.css';
import { useNavigate } from 'react-router-dom';
function Lawyers() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const navigate = useNavigate();

  
const handleProfile = async () => {
  try{
      navigate("/profile");
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
        
          <div className="df">
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

export default Lawyers;
