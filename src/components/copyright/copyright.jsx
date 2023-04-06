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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam,
        sapiente laboriosam eius pariatur, enim nam voluptatem, reprehenderit
        aut numquam odio velit. Quasi modi necessitatibus ipsam et expedita
        reiciendis fuga?
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
