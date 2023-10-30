import React, { useState } from 'react';
import './Profile.css'; 
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const lawyerData = {
    name: 'John Doe',
    location:'Bhubaneswar, Odisha, India',
    specialization:'Criminal Law, Civil Law, Family Law',
    aboutMe: 'I am an experienced lawyer with expertise in various areas of law...',
    cases: ['Solved a Case regarding a Crime', 'Solved an Issue regarding a property matter', 'Solved a Case regarding Intellectual Property'],
    reviews: [
      {
        name: 'Client 1',
        review: 'Excellent lawyer! Highly recommended.',
        stars: 5,
      },
      {
        name: 'Client 2',
        review: 'John helped me win my case. Very knowledgeable.',
        stars: 4,
      },
    ],
  };

  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState(lawyerData.reviews); // Initialize with existing reviews

  const handleBookAppointmentClick = async () => {
    try {
      navigate("/appointment");
    } catch (err) {
      console.log(err);
    }
  }


  const handleChatClick = async () => {
    try {
      navigate("/messages");
    } catch (err) {
      console.log(err);
    }
  }

  const handleReviewSubmit = () => {
    if (reviewText.trim() === '') {
      alert('Please enter a review.');
      return;
    }

 
    const newReview = {
      name: 'User', 
      review: reviewText,
      stars: 5, 
    };

    setReviews([...reviews, newReview]);


    setReviewText('');
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://picsum.photos/200/300" alt={lawyerData.name} className="profile-picture" />
        <h1>{lawyerData.name}</h1>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>{lawyerData.aboutMe}</p>
      </div>
      <div className="location">
        <h2>Location</h2>
        <p>{lawyerData.location}</p>
      </div>
      <div className="specialization">
        <h2>Specialization</h2>
        <p>{lawyerData.specialization}</p>
      </div>
      <div className="cases">
        <h2>Cases</h2>
        <ul>
          {lawyerData.cases.map((caseItem, index) => (
            <li key={index}>{caseItem}</li>
          ))}
        </ul>
      </div>

      <div className="reviews">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="review-header">
                {/* Render review data */}
              </div>
              <p className="review-text">{review.review}</p>
            </li>
          ))}
        </ul>
      </div>

    
      <div className="review-input">
        <textarea
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>

      <button className="profile-button" onClick={handleBookAppointmentClick}>Book An Appointment</button>
      <button className="profile-button" onClick={handleChatClick}>Chat with Lawyer</button>
    </div>
  );
};

export default Profile;
