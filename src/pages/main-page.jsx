import React from "react";
import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import AboutMe from "../components/aboutme/aboutme";
import Services from "../components/services/services";
import Resume from "../components/resume/resume";
import MySkills from "../components/myskills/myskills";
import Contact from "../components/contact/contact";
import Copyright from "../components/copyright/copyright";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Resume />
      <MySkills />
      <Contact />
      <Copyright />
    </>
  );
};
export default MainPage;
