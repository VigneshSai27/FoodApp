import { useState } from "react";
import Card from "./Card";
import { restaurantList } from "./constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

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
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <Card {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
