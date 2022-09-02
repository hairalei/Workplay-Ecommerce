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
  SignUp,
  PrivateRoute,
} from './pages';
import { Navbar, Sidebar, SingleProduct } from './components';
import { UserProvider } from './context/userContext';
import { ProductsProvider } from './context/productsContext';
import { CartProvider } from './context/cartContext';
import { FilterProvider } from './context/filterContext';

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
    if (window.innerWidth <= 900) setShowSidebar(true);
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [scrollHeight]);

  return (
    <>
      <UserProvider>
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
              </BrowserRouter>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>

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
