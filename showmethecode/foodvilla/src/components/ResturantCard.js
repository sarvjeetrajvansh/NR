import { IMG_CON_URL } from "../config";
const ResturantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating} ⭐️ </h4>
      <h5>Delivery Time : {slaString}</h5>
    </div>
  );
};

export default ResturantCard;
