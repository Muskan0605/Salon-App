// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HaircutOptions.css';

// const haircuts = [
//   {
//     name: 'Classic Cut',
//     description: 'A timeless haircut that suits all face shapes and hair types.',
//     price: '₹500',
//     rating: 4.5,
//     reviews: 120,
//   },
//   {
//     name: 'Layered Cut',
//     description: 'Adds volume and movement to your hair with expertly cut layers.',
//     price: '₹700',
//     rating: 4.7,
//     reviews: 98,
//   },
//   {
//     name: 'Bob Cut',
//     description: 'A chic and modern haircut that is easy to maintain and style.',
//     price: '₹600',
//     rating: 4.6,
//     reviews: 110,
//   }
// ];

// function HaircutOptions() {
//   const navigate = useNavigate();

//   const handleBookingClick = () => {
//     navigate('/booking');
//   };

//   return (
//     <div className="haircut-options slide-in">
//       <h2>Haircut Options</h2>
//       <div className="haircuts-container">
//         {haircuts.map((haircut, index) => (
//           <div className="haircut-card fade-in" key={index}>
           
//             <h3>{haircut.name}</h3>
//             <p>{haircut.description}</p>
//             <p className="price">{haircut.price}</p>
//             <p className="rating">Rating: {haircut.rating} ({haircut.reviews} reviews)</p>
//           </div>
//         ))}
//       </div>
//       <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
//     </div>
//   );
// }

// export default HaircutOptions;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HaircutOptions.css';

const haircuts = [
  {
    name: 'Classic Cut',
    description: 'A timeless haircut that suits all face shapes and hair types.',
    price: '₹500',
    rating: 4.5,
    reviews: 120,
  },
  {
    name: 'Layered Cut',
    description: 'Adds volume and movement to your hair with expertly cut layers.',
    price: '₹700',
    rating: 4.7,
    reviews: 98,
   
  },
  {
    name: 'Bob Cut',
    description: 'A chic and modern haircut that is easy to maintain and style.',
    price: '₹600',
    rating: 4.6,
    reviews: 110,
    
  }
];

function HaircutOptions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const filteredHaircuts = haircuts.filter(haircut =>
    haircut.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="haircut-options slide-in">
      <h2>Haircut Options</h2>
      <input
        type="text"
        placeholder="Search haircuts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="haircuts-container">
        {filteredHaircuts.map((haircut, index) => (
          <div className="haircut-card fade-in" key={index}>
            
            <h3>{haircut.name}</h3>
            <p>{haircut.description}</p>
            <p className="price">{haircut.price}</p>
            <p className="rating">Rating: {haircut.rating} ({haircut.reviews} reviews)</p>
            <button className="review-button">Leave a Review</button>
          </div>
        ))}
      </div>
      <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
    </div>
  );
}

export default HaircutOptions;
