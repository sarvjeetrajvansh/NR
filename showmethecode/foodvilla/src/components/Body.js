import { ResturantList_URL } from "../config";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { ShimmerPostList } from "react-shimmer-effects-18";
import useOnline from "../Utils/useOnline";
import { filterData } from "../Utils/Filter";

const Body = () => {
  const [SearchTxt, setSearchText] = useState("");
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const apidata = await fetch(ResturantList_URL);
    const json = await apidata.json();
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Not Online</h1>;
  }
  // not render component (Early return)
  if (!allRestaurants) return null;
  //conditionla rendering
  return allRestaurants?.length === 0 ? (
    <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={20} />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Cuisines : Chinese, Italian etc."
          value={SearchTxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (SearchTxt.length > 0) {
              const data = filterData(SearchTxt, allRestaurants);
              setfilteredRestaurants(data);
            } else {
              {
                alert("Please enter a value to Search");
              }
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <ResturantCard {...restaurant?.data} key={restaurant?.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
