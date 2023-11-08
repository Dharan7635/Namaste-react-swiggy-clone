import { MENU_URL } from "../utils/constant";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FOODIMG_URL } from "../utils/constant";
import { MENU_URL_SUFFIX } from "../utils/constant";

const RestaurantMenu = () => {
  console.log("Fetching menu...");
const{resId} = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuAPI();
  }, []);

  const fetchMenuAPI = async () => {
    const data = await fetch(MENU_URL+resId+MENU_URL_SUFFIX);
    const menuData = await data.json();
    // console.log(menuData.data.cards[2]);
    setResInfo(menuData.data);
  };
  if (resInfo === null) return <Shimmer />;
  const {
    name: resName,
    cuisines,
    areaName,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(cards);
  return (
    <div className="menu-container">
      <h1>{resName}</h1>
      <h3>{cuisines.join()}</h3>
      <p>
        📍{areaName}-{avgRating}&#9733;
      </p>
      <div className="menu-container">
        {cards.map((type, index) => {
          if (type.card.card.title && type.card.card.itemCards) {
            return (
              <div key={index} className="menu-list">
                <h2>{type.card.card.title}</h2>
                <ul>
                  {type.card.card.itemCards.map((dishName) => (
                    <div key={dishName.card.info.id} className="item-container">
                      <div className="item-list">
                        <li>{dishName.card.info.name}</li>
                        <p className="price">
                          &#x20B9;
                          {dishName.card.info.defaultPrice / 100 ||
                            dishName.card.info.price / 100}
                        </p>
                        <p>{dishName.card.info.description}</p>
                      </div>

                      <div className="foodimage-container">
                        <img
                          src={FOODIMG_URL + dishName.card.info.imageId}
                        ></img>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
