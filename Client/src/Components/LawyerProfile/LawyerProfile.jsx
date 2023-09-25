import React from 'react';

const LawyerProfile = ({ name, imageUrl, message, status, onAccept, onPay }) => {
  return (
    <div className="lawyer-profile">
      <img src={imageUrl} alt={`${name}'s profile`} />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <div className="profile-actions">
        {status === 'accepted' ? (
          <div>
            <p>Request Accepted</p>
            <button onClick={onPay}>Pay Now</button>
          </div>
        ) : (
          <div>
            <p>Request Pending</p>
            {/* Render a placeholder if the status is pending */}
            <div className="placeholder"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyerProfile;
