import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { IoIosLogIn } from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state?.cart?.value);
  return (
    <div className="navbar container">
      <NavLink className="navbar__logo" to={"/"}>
        <img src={Logo} alt="" />
      </NavLink>
      <div className="a">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
          <p>Shop</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Plant Care</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Blogs</p>
        </NavLink>
      </div>
      <div className="a1">
        <NavLink to={"/wishlist"}>
          <FaRegHeart />
        </NavLink>
        <CiSearch />
        <NavLink to={"/cart"}>
          <IoCartOutline />
          <h4>{cart.length}</h4>
        </NavLink>
        <button>
          <IoIosLogIn id="a2" />
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
