import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Cart, Checkout, Home, LogIn, Products, SignUp } from './pages';
import { Navbar, Sidebar } from './components';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 500 ? setShowSidebar(true) : setShowSidebar(false);
      setScrollHeight(windowHeight);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 700) setShowSidebar(true);
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [scrollHeight]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {showSidebar && <Sidebar />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
