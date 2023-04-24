import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import "./copyright.css";

export const Copyright = () => {
  return (
    <div className="text-center">
      <h1 className="heading-name">
        <span className="main-heading">Aman</span> Mishra
      </h1>
      <div className="w-50 ms-auto me-auto">
        
I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
			<br/><br/><br/><span>
Feel free to reach out through any platforms bellow:
			</span>
      </div>
      <div className="my-4">
        <BsInstagram className="m-2 border rounded logo " />
        <FiFacebook className="m-2 border rounded logo" />
        <FiTwitter className="m-2 border rounded logo" />
        <CiLinkedin className="m-2 border rounded logo" />
      </div>
      <hr className="customise-line" />
      <div className="mb-5 mx-3">
        Copyright © Untitled. All rights reserved. Design By Aman Mishra.
        <br />
        Images Unsplash, Pixabay, Freepik, Icon Flaticon
      </div>
      <hr />
    </div>
  );
};
export default Copyright;
