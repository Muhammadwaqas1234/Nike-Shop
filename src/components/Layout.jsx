import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";
import Store from "./Store";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="product"><Product /></section>
        <section id="shop"><Shop /></section>
        <section id="store"><Store /></section>

        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
        
      </main>
    </>
  );
};

export default Layout;
