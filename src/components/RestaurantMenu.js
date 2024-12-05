import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurants from "../utils/useRestaurants";

const RestaurantMenu = () => {
  const resId = useParams();
  const menu = useRestaurants(resId);

  return (
    <div className="menu-items">
      {menu?.map((m) => {
        return (
          <div className="menu-item" key={m.card.info.id}>
            <img src={IMG_URL + m?.card?.info?.imageId} alt="menu-logo" />
            <p>{m.card.info.name}</p>
            <p>Rs. {m.card.info.price / 100}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
