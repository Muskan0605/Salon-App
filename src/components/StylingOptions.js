// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './StylingOptions.css';

// const stylings = [
//   {
//     name: 'Curly Style',
//     description: 'Get beautiful curls that last all day.',
//     price: '₹1200',
  
//     rating: 4.8,
//     reviews: 75,
//   },
//   {
//     name: 'Straight Style',
//     description: 'Achieve sleek and straight hair with our professional styling.',
//     price: '₹1000',
    
//     rating: 4.7,
//     reviews: 85,
//   },
//   {
//     name: 'Updo',
//     description: 'Perfect for special occasions, our updos are elegant and stylish.',
//     price: '₹1500',
   
//     rating: 4.9,
//     reviews: 65,
//   }
// ];

// function StylingOptions() {
//   const navigate = useNavigate();

//   const handleBookingClick = () => {
//     navigate('/booking');
//   };

//   return (
//     <div className="styling-options slide-in">
//       <h2>Styling Options</h2>
//       <div className="stylings-container">
//         {stylings.map((styling, index) => (
//           <div className="styling-card fade-in" key={index}>
           
//             <h3>{styling.name}</h3>
//             <p>{styling.description}</p>
//             <p className="price">{styling.price}</p>
//             <p className="rating">Rating: {styling.rating} ({styling.reviews} reviews)</p>
//           </div>
//         ))}
//       </div>
//       <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
//     </div>
//   );
// }

// export default StylingOptions;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ColoringOptions.css';

const colorings = [
  {
    name: 'Balayage',
    description: 'A beautiful, natural-looking hair color technique.',
    price: '₹2000',
    rating: 4.9,
    reviews: 90,
  },
  {
    name: 'Highlights',
    description: 'Add dimension and brightness to your hair.',
    price: '₹1800',
    rating: 4.8,
    reviews: 80,
  },
  {
    name: 'Full Color',
    description: 'Get a complete hair color transformation.',
    price: '₹2500',
    rating: 4.7,
    reviews: 70,
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
          </div>
        ))}
      </div>
      <button className="booking-button bounce" onClick={handleBookingClick}>Book Your Appointment</button>
    </div>
  );
}

export default ColoringOptions;
