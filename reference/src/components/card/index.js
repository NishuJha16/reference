import "./index.style.scss";

const Card = ({ title, total, image }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">
        <div className="count">{total}</div>
        <img src={image} alt="icon" />
      </div>
    </div>
  );
};
export default Card;
