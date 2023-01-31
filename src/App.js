import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>WELCOME  </p>
        <p>TO</p>
        <h1> FEEDBACK MANAGEMENT SYSTEM </h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Group Members </p>
        <h1> Hitesh</h1>
        <h1>Rohith</h1>
        <h1>Justin</h1>
      </section>
    </>
  );
};


 



const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/Product">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>


      <Route path="/new product">
        <Contact />
      </Route>

      <Route path="/top rated product">
        <Contact />
      </Route>

    </Switch>
  );
};

export default App;
