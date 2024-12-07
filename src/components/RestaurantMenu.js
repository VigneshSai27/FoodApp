import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import useRestaurants from "../utils/useRestaurants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const resId = useParams();
  const menu = useRestaurants(resId); //custom hook

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItems = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="flex flex-wrap border-solid">
      {menu?.map((m) => {
        return (
          <div className="w-44 m-8 ml-12 mb-24 h-3/4" key={m.card.info.id}>
            <img src={IMG_URL + m?.card?.info?.imageId} alt="menu-logo" />
            <p>{m.card.info.name}</p>
            <p>Rs. {m.card.info.price / 100}</p>
            <div className="flex flex-wrap justify-center">
              <button
                className="border bg-violet-200 p-1.5 hover:bg-red-300"
                onClick={() => handleRemoveItems(m.card.info)}
              >
                -
              </button>
              <p className=" bg-violet-200 p-1.5">
                {
                  cartItems.filter((item) => {
                    item.id == m.card.info.id;
                  }).length
                }
              </p>
              <button
                className="border bg-violet-200 p-1.5 hover:bg-red-300"
                onClick={() => handleAddItems(m.card.info)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
