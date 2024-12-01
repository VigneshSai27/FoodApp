import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  cuisines,
  areaName,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="hotel img"
      ></img>
      <Link to={"restaurant/" + id}>{name}</Link>
      <div>{cuisines[0] + ", " + cuisines[1]}</div>
      <div>{areaName}</div>
      <div>{avgRating} star</div>
    </div>
  );
};
export default Card;
