import { useEffect } from "react";
import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
    id
  } = resData?.info;
  useEffect(()=>{
    console.log("Im use effect")
  },[])
  return  (
    
    <div className="res-cards">
      {console.log("im from jsx")}
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <div className="cuisine-container">
        <p>{cuisines.join(",")}</p>
      </div>
      {/* <p>{cuisines.join(",")}</p> */}
      <div className="other-details">
        <h4>{avgRating+" "}&#9733;</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
      {/* <h4>{id}</h4> */}
    </div>
  );
};

export default RestaurantCard;
