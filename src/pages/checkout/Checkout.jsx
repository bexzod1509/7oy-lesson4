import React, { useState } from "react";
import "./Checkout.css";
import payment from "../../assets/payment.png";
import { useSelector, useDispatch } from "react-redux";
import Empty from "../../components/empty/Empty";
import ellipse from "../../assets/Ellipse.png";
import { toast } from "react-toastify";

import { NavLink } from "react-router-dom";
function Checkout() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  let total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const submit = (e) => {
    e.preventDefault();
    let data = {
      name,
      lastname,
      country,
      town,
      address,
      state,
      zip: +zip,
      email,
      phone,
      totalPrice: total + 16,
    };
    console.log(data);
    toast.success("Thank you for your purchase");
  };
  let maxsulot = cart?.map((item) => (
    <div
      key={item.id}
      style={{ width: "405px", gap: "30px", justifyContent: "space-between" }}
      className="d4"
    >
      <div className="d5">
        <img src={item.images[0]} alt="" />
        <div>
          <h1>{item.title}</h1>
          <h2>SKU: 1995751877966</h2>
        </div>
      </div>
      <p>(x {item.quantity})</p>
      <h3>${item.price * item.quantity}.00</h3>
    </div>
  ));
  return cart.length ? (
    <div className="container">
      <div className="d">
        <p>
          <b>Home</b> / Shop / Checkout
        </p>
      </div>
      <div className="z">
        <p>Billing Address</p>
      </div>
      <div className="e">
        <form onSubmit={submit} action="">
          <div className="e1">
            <div className="e2">
              <div>
                <p>
                  First Name <b>*</b>
                </p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                <p>
                  Last Name <b>*</b>
                </p>
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="e2">
              <div>
                <p>
                  Country / Region <b>*</b>
                </p>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  name=""
                  id=""
                >
                  <option value="Select a country / region">
                    Select a country / region
                  </option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Russia"> Russia</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <p>
                  Town / City <b>*</b>
                </p>
                <input
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="e2">
              <div>
                <p>
                  Street Address <b>*</b>
                </p>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="House number and street name"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                />
              </div>
            </div>
            <div className="e2">
              <div>
                <p>
                  State <b>*</b>
                </p>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  name=""
                  id=""
                >
                  <option value="Select a state">Select a state</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Russia"> Russia</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <p>
                  Zip <b>*</b>
                </p>
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="e2">
              <div>
                <p>
                  Email address<b>*</b>
                </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </div>
              <div>
                <p>
                  Phone Number <b>*</b>
                </p>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit">Place Order</button>
          <div className="e3">
            <img src={ellipse} alt="" />
            <p>Ship to a different address?</p>
          </div>
          <h2>Order notes (optional)</h2>
          <textarea name="" id=""></textarea>
        </form>
        <div className="e4">
          <h1>Your Order</h1>
          <div className="e5">
            <p>Products</p>
            <p>Subtotal</p>
          </div>
          {maxsulot}
          <div className="e6">
            <h4>
              Have a coupon code? <b>Click here</b>
            </h4>
          </div>
          <div>
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
          </div>
          <div className="e7">
            <h2>Payment Method</h2>
            <label htmlFor="payment">
              <input type="radio" name="payment" id="payment" />
              <img src={payment} alt="" />
            </label>
            <label htmlFor="payment">
              <input type="radio" name="payment" id="payment" />
              <h3>Dorect bank transfer</h3>
            </label>
            <label htmlFor="payment">
              <input type="radio" name="payment" id="payment" />
              <h3>Cash on deliveryr</h3>
            </label>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Empty text={"Chekout"} />
  );
}

export default Checkout;
