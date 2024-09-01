import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import contact_img from "./contact.png";
import Footer from "../../components/footer/Footer";



function Contact() {
  return (
    <div>
      <Navbar/>
      <h1 className="product_title">Contact</h1>
      <img src={contact_img} className="product_img"/>
      <Footer/>
    </div>
  )
}

export default Contact