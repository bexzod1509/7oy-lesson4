import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Productcart from "../../components/Productcart/Productcart";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  return <div>{cart.length ? <Productcart /> : <Empty text="Cart" />}</div>;
};

export default Cart;
