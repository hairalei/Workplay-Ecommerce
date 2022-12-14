import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  About,
  Cart,
  Checkout,
  Error,
  ForgotPassword,
  Home,
  LogIn,
  LogOut,
  Products,
  Profile,
  SignUp,
  PrivateRoute,
} from './pages';
import {
  Navbar,
  Sidebar,
  SingleProduct,
  MobileNav,
  Footer,
} from './components';
import { UserProvider } from './context/userContext';
import { ProductsProvider } from './context/productsContext';
import { CartProvider } from './context/cartContext';
import { FilterProvider } from './context/filterContext';
import { useUserContext } from './context/userContext';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { setCurrentUser } = useUserContext();

  useEffect(() => {
    setCurrentUser(
      JSON.parse(window.localStorage.getItem('workplayUser')) || null
    );
  }, []);

  // Stick navbar when scrolling when scrollY is greater than 500
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      if (windowHeight >= 500 && innerWidth >= 900) {
        setShowSidebar(true);
      }

      if (windowHeight < 500 && innerWidth >= 900) {
        setShowSidebar(false);
      }

      setScrollHeight(windowHeight);
    }
  };

  // Show sidebar for  small to medium screens
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', stickNavbar);

    if (window.innerWidth <= 900) setShowSidebar(true);
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
      window.removeEventListener('resize', stickNavbar);
    };
  }, [scrollHeight, innerWidth]);

  return (
    <>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <BrowserRouter>
              <Navbar />
              {showSidebar && <Sidebar scrollHeight={scrollHeight} />}

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route
                  path='/profile'
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route
                  path='/checkout'
                  element={
                    <PrivateRoute>
                      <Checkout />
                    </PrivateRoute>
                  }
                />
                <Route path='*' element={<Error />} />

                <Route path='/login' element={<LogIn />} />
                <Route path='/logout' element={<LogOut />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
              </Routes>

              <Footer />
              <MobileNav />
            </BrowserRouter>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>

      <ToastContainer
        position='bottom-right'
        hideProgressBar={true}
        autoClose={4000}
        closeButton={true}
      />
    </>
  );
}

export default App;
