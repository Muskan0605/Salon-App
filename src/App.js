
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CategorySection from './components/CategorySection';
// import HaircutOptions from './components/HaircutOptions';
// import ColoringOptions from './components/ColoringOptions';
// import StylingOptions from './components/StylingOptions';
// import BookingForm from './components/BookingForm';
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<CategorySection />} />
//           <Route path="/haircut-options" element={<HaircutOptions />} />
//           <Route path="/coloring-options" element={<ColoringOptions />} />
//           <Route path="/styling-options" element={<StylingOptions />} />
//           <Route path="/booking" element={<BookingForm />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';
import HaircutOptions from './components/HaircutOptions';
import ColoringOptions from './components/ColoringOptions';
import StylingOptions from './components/StylingOptions';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CategorySection />} />
          <Route path="/haircut-options" element={<HaircutOptions />} />
          <Route path="/coloring-options" element={<ColoringOptions />} />
          <Route path="/styling-options" element={<StylingOptions />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

