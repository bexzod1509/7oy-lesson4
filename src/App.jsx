import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/checkout/Checkout";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
