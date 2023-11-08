import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRes, setListofRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    swiggyAPI();
  }, []);

  //Fetching data From API - Note:-This Request only work for Desktop.Modify it while making this application Responsive.
  const swiggyAPI = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJson = await data.json();
    console.log(
      dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListofRes(
      dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      dataJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
if(listofRes.length === 0){
  return  <Shimmer />
}
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="input-field"
            type="text"
            value={searchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              // let searchedRes;
              console.log(searchRes);
              const searchedRes = listofRes.filter((restaurant) => {
                if (
                  !restaurant.info.name
                    .toLowerCase()
                    .includes(searchRes.toLowerCase())
                ) {
                  console.log("no restaurant");
                }
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchRes.toLowerCase());
              });
              setFilteredRes(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRatedRes = listofRes.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredRes(topRatedRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
                {filteredRes.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
                {filteredRes.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
                {filteredRes.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
