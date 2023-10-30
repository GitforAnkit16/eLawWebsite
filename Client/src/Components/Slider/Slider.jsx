import React, { useState } from 'react';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
function Slider() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate('/lawyers');
  };

  const categorie = [
    "Divorce",
    "Contracts",
    "Harassements",
    "Properties",
    "Drafting",
    "Finance",
    "Consumer",
    "Litigation",
    "Bail",
    "Bankrupty",
    "Probono",
    "Negotiation",
    "White Collar",
    "Criminal",
    "Realestate",
    "Healthcare",
    "Tax",
    "More"
  ];

  return (
    <div className='Slider'>
      <div className='yop'>Categories</div>
      <div className='grido'>
        {categorie.map((category, index) => (
          <div
            key={index}
            className= "categorye"
            onClick={() => handleCategoryClick()}
          >
            <span className='.tutter'>{category}</span>
          </div>
        ))}
      </div>
        </div>
      )}

export default Slider;