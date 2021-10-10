import React from "react";
import './App.css';
import Header from '../Header/Header';
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Company from "../Company/Company";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <Services />
      <Company/>
      <Footer />
    </div>
  );
}

export default App;
