import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantList } from "./constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    restaurantData();
  }, []);

  const restaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550"
    );
    const json = await data.json();
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(searchText);
          setFilteredRestaurants(
            restaurantList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
          );
        }}
      >
        Search
      </button>
      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            return <Card {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
