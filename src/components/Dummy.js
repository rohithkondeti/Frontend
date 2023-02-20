import React from "react";
import Navbar1 from "./Navbar1";
import ProductIdDialog from "./ProductIdDialog";
 
const Product = () => {

  
  return (
    <>
      <Navbar1 />
      <section className="hero-section" style={{backgroundImage: "url(https://img.freepik.com/free-photo/cheerful-young-woman-thinking-buying-something-holding-shopping-bags-with-dreamy-smile-buying-sta_1258-127372.jpg?w=1380&t=st=1676870880~exp=1676871480~hmac=a17e901ba52450ba634a8ea38992afc38917a04e6b4554164c908aa923cc713e)", backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>
        <p>Welcome to </p>
        <h1> Product Page</h1>
      </section>
    </>
  );
};

export default Product;
