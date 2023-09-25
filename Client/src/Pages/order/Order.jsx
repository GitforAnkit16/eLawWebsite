import React, { useState } from 'react';
import LawyerProfile from '../../Components/LawyerProfile/LawyerProfile';
import "./Order.css"
const OrderPage = () => {
  
  const lawyerData = [
    {
      id: 1,
      name: 'John Snow',
      imageUrl: 'https://picsum.photos/200/300',
      message: 'I specialize in family law.',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Eliza Ray',
      imageUrl: 'https://picsum.photos/200/300',
      message: 'Experienced in criminal defense.',
      status: 'accepted',
    },
  ];

  const [lawyers, setLawyers] = useState(lawyerData);

  const handleAccept = (id) => {
    const updatedLawyers = lawyers.map((lawyer) => {
      if (lawyer.id === id) {
        return { ...lawyer, status: 'accepted' };
      }
      return lawyer;
    });
    setLawyers(updatedLawyers);
  };

  const handlePay = (id) => {
    // Handle payment logic here
    alert(`Payment for lawyer with ID ${id} initiated.`);
  };

  return (
    <div className="order-page">
      <h1>Requests</h1>
      <div className="lawyer-list">
        {lawyers.map((lawyer) => (
          <LawyerProfile
            key={lawyer.id}
            name={lawyer.name}
            imageUrl={lawyer.imageUrl}
            message={lawyer.message}
            status={lawyer.status}
            onAccept={() => handleAccept(lawyer.id)}
            onPay={() => handlePay(lawyer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
