import { ResturantList } from "../config";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

function filterData(SearchTxt, restaurants) {
  const filterdata = restaurants.filter((resturant) => {
    resturant.data.name.includes(SearchTxt);
  });
  return filterdata;
}

const Body = () => {
  const [SearchTxt, setSearchText] = useState("");

  const [restaurants, setrestaurants] = useState(ResturantList);
  //useState Hook return = [varName,setFunction to update var]
  //In react we use state to create var as vars are react local storage.
  // to set default value pass args to useState("Args")
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
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
            const data = filterData(SearchTxt, restaurants);
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => {
          return <ResturantCard {...restaurant.data.data} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
