import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Card = ({
  id,
  name,
  cuisines,
  areaName,
  avgRating,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="h-96 w-52 ml-14 mt-5 mr-8 mb-16 ">
      <img
        className="ml-1.5 mt-1.5 h-60 w-48 box-border"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="hotel img"
      ></img>
      <div className="ml-2">
        <Link className="text-blue-600" to={"restaurant/" + id}>
          {name}
        </Link>
        <div>{cuisines[0] + ", " + cuisines[1]}</div>
        <div>{areaName}</div>
        <div>{avgRating} star</div>
        <div>
          {user.name} - {user.email}
        </div>
      </div>
    </div>
  );
};
export default Card;
