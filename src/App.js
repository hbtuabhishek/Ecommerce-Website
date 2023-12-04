import React, { useState } from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppongCartProvider } from "./context/ShoppingCartContext";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setcart] = useState([]);
  return (
    <ShoppongCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store cart={cart} setcart={setcart} />}>
            
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={ <Cart cart={cart} setcart={setcart} />}>
           
          </Route>
        </Routes>
      </Container>
    </ShoppongCartProvider>
  );
};

export default App;
