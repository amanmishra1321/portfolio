import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div
        id="my-card"
        className="my-card py-5 my-3 card-background fadeInUp px-3 center"
      >
        <div className="text-center card-background me-2 center">
          <span style={{ width: "35px", height: "35px" }}>{props?.icon}</span>
          <h5 className="card-background my-2">{props?.heading}</h5>
          <div className="card-background secondary-text">{props?.text}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
