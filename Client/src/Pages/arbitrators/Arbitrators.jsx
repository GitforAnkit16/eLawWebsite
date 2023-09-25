import React, { useState } from 'react';
    import './Arbitrators.css';
    import { useNavigate } from 'react-router-dom';
    function Arbitrators() {
      const [activeCategory, setActiveCategory] = useState(null);
         const navigate=useNavigate()
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
        "Family Law Arbitrators"
    
      ];
      const handleProfile = async () => {
        try{
            navigate("/profile");
         }catch(err){
            console.log(err);
        }
      }
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
            <>
            <div className="df-Arbitrators">
        
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
            </>
          )}
        </div>
      );
    }
    
    export default Arbitrators;
    

