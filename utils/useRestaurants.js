import { useEffect, useState } from "react";
import { MENU_API } from "../components/constants";

const useRestaurants = (resId) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(MENU_API + resId.id);
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return menu;
};

export default useRestaurants;
