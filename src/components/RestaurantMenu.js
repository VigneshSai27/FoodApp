import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurants from "../utils/useRestaurants";

const RestaurantMenu = () => {
  const resId = useParams();
  const menu = useRestaurants(resId); //custom hook

  return (
    <div className="flex flex-wrap border-solid ">
      {menu?.map((m) => {
        return (
          <div className="h-60 w-44 m-8 ml-12 mb-16" key={m.card.info.id}>
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
