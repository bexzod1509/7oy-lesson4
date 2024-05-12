import React from "react";
import "./Productcart.css";
import { NavLink } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { incrementCartQuantity } from "../../context/cartSlice";
import { decrementCartQuantity } from "../../context/cartSlice";
import { removeItemFromCart } from "../../context/cartSlice";
import { toast } from "react-toastify";
function Productcart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  let total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let maxsulot = cart?.map((item) => (
    <div key={item.id} className="d4">
      <div className="d5">
        <img src={item.images[0]} alt="" />
        <div>
          <h1>{item.title}</h1>
          <h2>SKU: 1995751877966</h2>
        </div>
      </div>
      <p>${item.price}.00</p>
      <div className="d6">
        <button onClick={() => dispatch(incrementCartQuantity(item))}>+</button>
        <h4>{item.quantity}</h4>
        <button
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
      </div>
      <h3>${item.price * item.quantity}.00</h3>
      <div
        onClick={() => {
          dispatch(removeItemFromCart(item));
          toast.success("Deleted successfully");
        }}
      >
        <MdDeleteOutline />
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="d">
        <p>
          <b>Home</b> / Shop / Shopping Cart{" "}
        </p>
      </div>
      <div className="d1">
        <div>
          <div className="d2">
            <p>Products</p>
            <div className="d3">
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
          </div>
          {maxsulot}
        </div>
        <div className="d7">
          <h1>Cart Totals</h1>
          <h2>Coupon Apply</h2>
          <div className="d8">
            <input type="text" placeholder="Enter coupon code here..." />
            <button>Apply</button>
          </div>
          <div className="d9">
            <h3>Subtotal</h3>
            <h4>${total}.00</h4>
          </div>
          <div className="d9">
            <h3>Coupon Discount</h3>
            <p>(-) 00.00</p>
          </div>
          <div className="d9">
            <h3>Shiping</h3>
            <div>
              <h4>$16.00</h4>
              <b>View shipping charge</b>
            </div>
          </div>
          <div className="d10">
            <p>Total</p>
            <h4>${total + 16}.00</h4>
          </div>
          <NavLink to={"/check"}>
            <button className="d11">Proceed To Checkout</button>
          </NavLink>
          <NavLink to={"/"}>
            <h6>Continue Shopping</h6>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Productcart;
