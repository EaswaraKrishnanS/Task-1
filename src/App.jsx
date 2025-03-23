import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./MainContent/MainContent";
import PostCard from "./PostCard/PostCard";
import SideBar from "./SideBar/Sidebar";
import Poster from "./Poster/Poster";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <MainContent />
        <PostCard />
        <SideBar />
        <Poster />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
