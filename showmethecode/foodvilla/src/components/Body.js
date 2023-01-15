import { ResturantList_URL } from "../config";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { ShimmerPostList } from "react-shimmer-effects-18";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.cuisines?.some((cuisine) =>
      // The some() method tests whether at least one element in the cuisines array passes the test implemented by the provided function.
      cuisine?.toLowerCase()?.includes(searchText.toLowerCase())
    )
  );
  return filterData;
}
const Body = () => {
  const [SearchTxt, setSearchText] = useState("");
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] =
    useState(allRestaurants);
  //useState Hook return = [varName,setFunction to update var]
  //In react we use state to create var as vars are react local storage.
  // to set default value pass args to useState("Args")
  async function getResturants() {
    const apidata = await fetch(ResturantList_URL);
    const json = await apidata.json();
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getResturants();
  }, []);

  // if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)
    return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;

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
            <ResturantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
