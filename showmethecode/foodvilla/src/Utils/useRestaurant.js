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
    setrestaurant(jsonData.data);
  }
  return restaurant;
};

export default useRestaurant;
