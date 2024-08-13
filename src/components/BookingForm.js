
// import React, { useState } from 'react';
// import './BookingForm.css';

// function BookingForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     service: '',
//     date: '',
//     time: '',
//     stylist: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="booking-form">
//       <h2>Book Your Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </label>
//         <label>
//           Address:
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </label>
//         <label>
//           Service:
//           <select name="service" value={formData.service} onChange={handleChange} required>
//             <option value="">Select a service</option>
//             <option value="haircut">Haircut</option>
//             <option value="coloring">Coloring</option>
//             <option value="styling">Styling</option>
//           </select>
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <label>
//           Preferred Stylist:
//           <input type="text" name="stylist" value={formData.stylist} onChange={handleChange} />
//         </label>
//         <button type="submit">Book Appointment</button>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;

import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    stylist: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form zoom-in">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Service:
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="haircut">Haircut - ₹500</option>
            <option value="coloring">Coloring - ₹1500</option>
            <option value="styling">Styling - ₹1000</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Preferred Stylist:
          <input type="text" name="stylist" value={formData.stylist} onChange={handleChange} />
        </label>
        <button type="submit" className="pulse">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookingForm;


