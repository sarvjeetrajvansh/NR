import { ResturantList } from "../config";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.data.cuisines.includes(searchText)
  );

  return filterData;
}
const Body = () => {
  const [SearchTxt, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(ResturantList);

  let [searchCounter, setSearchCounter] = useState(0);
  //useState Hook return = [varName,setFunction to update var]
  //In react we use state to create var as vars are react local storage.
  // to set default value pass args to useState("Args")
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="cuisines : Chinese, Italian etc."
          value={SearchTxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            //filter data & update state of resturant vars
            if (SearchTxt.length > 0) {
              const data = filterData(SearchTxt, ResturantList);
              setRestaurants(data);
              setSearchCounter((searchCounter += 1));
            } else {
              {
                alert("Please enter a value to Search");
              }
            }
          }}
        >
          Search
        </button>
        <span className="search-counter"> 🔎 {searchCounter} Times </span>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
