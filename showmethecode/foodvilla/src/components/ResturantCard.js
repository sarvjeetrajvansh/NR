import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
const ResturantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  id,
}) => {
  return (
    <>
      <div className="menu-link">
        <Link to={"/restaurant/" + id} key={id}>
          <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.slice(0 - 2).join(", ")}</h4>
            <h4>Rating : {avgRating} ⭐️ </h4>
            <h5>Delivery Time : {slaString}</h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ResturantCard;
