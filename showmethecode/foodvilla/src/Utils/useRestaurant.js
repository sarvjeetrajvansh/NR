import { useState, useEffect } from "react";
import { RES_MENU_API } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setrestaurant] = useState(null);
  useEffect(() => {
    getResturantInfo();
  }, []);
  async function getResturantInfo() {
    const apiData = await fetch(RES_MENU_API + resId);
    const jsonData = await apiData.json();

    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info
    setrestaurant(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;
