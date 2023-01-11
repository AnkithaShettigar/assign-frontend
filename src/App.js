import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Header/Home';
import Service from './components/Header/Service';
import Products from './components/Header/Products';
import Aiinternship from './components/Header/Aiinternship';
import Career from './components/Header/Career';
import Blog from './components/Header/Blog';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Mainfooter from './components/Mainfooter/Mainfooter';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/internship" element={<Aiinternship />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <Mainfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
