

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategorySection.css';

const categories = [
  { name: 'Haircut', id: 'haircut' },
  { name: 'Coloring', id: 'coloring' },
  { name: 'Styling', id: 'styling' },
];

function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'haircut') {
      navigate('/haircut-options');
    } else if (categoryId === 'coloring') {
      navigate('/coloring-options');
    } else if (categoryId === 'styling') {
      navigate('/styling-options');
    }
  };

  return (
    <div className="category-section">
      <div className="hero-section">
        <h1>Welcome to Our Salon</h1>
        <p>Experience the best in hair care and styling. Book your appointment today!</p>
        <button className="booking-button" onClick={() => navigate('/booking')}>Book Now</button>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>At our salon, we believe in providing top-notch services to help you look and feel your best. Our team of experienced stylists is dedicated to offering personalized care and attention to each client.</p>
      </div>
      <div className="services-overview">
        <h2>Our Services</h2>
        <div className="services-container">
          {categories.map((category) => (
            <div className="service-card" key={category.id} onClick={() => handleCategoryClick(category.id)}>
              {/* <img src={``} alt={`${category.name}`} /> */}
              <h3>{category.name}</h3>
              <p>Discover our {category.name.toLowerCase()} services and find the perfect style for you.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;

