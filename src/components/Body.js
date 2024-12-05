import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantList } from "./constants";
import Shimmer from "./Shimmer";
import { filteredData } from "../utils/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    restaurantData();
  }, []);

  const restaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550"
    );
    const json = await data.json();
    const card = json?.data?.cards?.find(
      (card) => card?.card?.id === "restaurant_grid_listing"
    );
    const filterDdata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(filterDdata);
    setRestaurants(filterDdata);
    setFilteredRestaurants(filterDdata);
  };

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        placeholder="Here you go"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="p-1.5 mt-3 ml-96 placeholder-gray-300 outline text-violet-300"
      />
      <button
        onClick={() => {
          console.log(searchText);
          console.log(filteredData(searchText, filteredRestaurants));
          setFilteredRestaurants(filteredData(searchText, restaurants));
        }}
        className="ml-3 bg-pink-200 p-2"
      >
        Search
      </button>
      <div className="flex flex-wrap ">
        {filteredRestaurants?.length === 0 ? (
          <h2>No Restaurant found</h2>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return <Card {...restaurant.info} key={restaurant.info.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
