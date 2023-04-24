import "./card.css";

import { useEffect } from "react";
import { SiXdadevelopers } from "react-icons/si";

const Card = (props) => {
  return (
    <div
      className="my-card my-card1 py-5 my-3 card-background fadeInUp px-3 center"
      data-wow-delay="0.6s"
      style={{
        visibility: "visible",
        animationDelay: "0.6s",
      }}
    >
      <div className="text-center card-background me-2 center">
        {props?.icon}
        <h5 className="card-background my-2">{props?.heading}</h5>
        <div className="card-background secondary-text">
          {props?.text}
        </div>
      </div>
    </div>
  );
};
export default Card;
