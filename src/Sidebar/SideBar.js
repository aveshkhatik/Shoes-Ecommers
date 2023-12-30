import React from "react";
import "./SideBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Catogary from "./Catogary/Catogary";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const SideBar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <Catogary handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
};

export default SideBar;
