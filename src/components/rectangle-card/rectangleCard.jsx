import React from "react";
import "./rectangleCard.css";
const RectangleCard = (props) => {
  return (
    <div className="border text-center p-3 my-3">
      <div>{props?.heading}</div>
      <div className="text-center">
        <hr className="customise-line" />
      </div>
      <div>{props?.firstLine}</div>
      <div>{props?.secondLine}</div>
    </div>
  );
};

export default RectangleCard;
