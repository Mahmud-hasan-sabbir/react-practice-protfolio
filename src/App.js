import './App.css';
import Home from './pages/Home'; // Corrected import path
import About from './pages/About';
import Contact  from './pages/contact';


import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
   </BrowserRouter>
    
  );
}

export default App;

