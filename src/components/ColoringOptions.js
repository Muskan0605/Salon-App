// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ColoringOptions.css';

// const colorings = [
//   {
//     name: 'Blonde Highlights',
//     description: 'Add some brightness to your hair with beautiful blonde highlights.',
//     price: '₹1500',
   
//     rating: 4.8,
//     reviews: 85,
//   },
//   {
//     name: 'Ombre',
//     description: 'A gradual blend from one color to another, creating a stunning effect.',
//     price: '₹2000',
   
//     rating: 4.7,
//     reviews: 90,
//   },
//   {
//     name: 'Balayage',
//     description: 'A freehand painting technique for a natural, sun-kissed look.',
//     price: '₹2500',
   
//     rating: 4.9,
//     reviews: 95,
//   }
// ];

// function ColoringOptions() {
//   const navigate = useNavigate();

//   const handleBookingClick = () => {
//     navigate('/booking');
//   };

//   return (
//     <div className="coloring-options slide-in">
//       <h2>Coloring Options</h2>
//       <div className="colorings-container">
//         {colorings.map((coloring, index) => (
//           <div className="coloring-card fade-in" key={index}>
            
//             <h3>{coloring.name}</h3>
//             <p>{coloring.description}</p>
//             <p className="price">{coloring.price}</p>
//             <p className="rating">Rating: {coloring.rating} ({coloring.reviews} reviews)</p>
//           </div>
//         ))}
//       </div>
//       <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
//     </div>
//   );
// }


// export default ColoringOptions;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ColoringOptions.css';

const colorings = [
  {
    name: 'Blonde Highlights',
    description: 'Add some brightness to your hair with beautiful blonde highlights.',
    price: '₹1500',
    rating: 4.8,
    reviews: 85,
  },
  {
    name: 'Ombre',
    description: 'A gradual blend from one color to another, creating a stunning effect.',
    price: '₹2000',
    rating: 4.7,
    reviews: 90,
  },
  {
    name: 'Balayage',
    description: 'A freehand painting technique for a natural, sun-kissed look.',
    price: '₹2500',
    rating: 4.9,
    reviews: 95,
  }
];

function ColoringOptions() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <div className="coloring-options slide-in">
      <h2>Coloring Options</h2>
      <div className="colorings-container">
        {colorings.map((coloring, index) => (
          <div className="coloring-card fade-in" key={index}>
            <h3>{coloring.name}</h3>
            <p>{coloring.description}</p>
            <p className="price">{coloring.price}</p>
            <p className="rating">Rating: {coloring.rating} ({coloring.reviews} reviews)</p>
            <button className="review-button">Leave a Review</button>
          </div>
        ))}
      </div>
      <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
    </div>
  );
}

export default ColoringOptions;
