import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL, RES_MENU_API } from "../config";
import { ShimmerCategoryList } from "react-shimmer-effects-18";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setrestaurant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);
  async function getResturantInfo() {
    const apiData = await fetch(RES_MENU_API + resId);
    const jsonData = await apiData.json();
    setrestaurant(jsonData.data);
  }
  return !restaurant ? (
    <ShimmerCategoryList />
  ) : (
    <>
      <div className="menu-page">
        <div className="menu">
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <div className="resturant-details">
            <div className="res-identifier">
              {restaurant?.name} <span>[Resturant ID :{resId}]</span>
            </div>
            <div className="res-location">
              <div>{restaurant?.area},</div>
              <div>{restaurant?.city}</div>
            </div>
            <div>
              {restaurant?.avgRating} ⭐️ | {restaurant?.costForTwoMsg}
            </div>
          </div>
        </div>
        <div className="menu-list">
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
