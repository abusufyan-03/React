import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
// import resList from "../utils/mockData"
import Shimmer from "./shimmer";
import { useState } from "react";
const Body = () => {

    // state Variable - super powerful
    let [listOfRestaurants, setListOfRestaurants] = useState([         
    // {
    //   type: 'restaurant',
    //   info: {
    //     id: '334475',
    //     name: 'KFC',
    //     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //     costForTwo: 40000,
    //     deliveryTime: 36,
    //     avgRating: '3.8',
    //     sla: {
    //       deliveryTime: 25
    //     }
    //   },
    // },
    // {
    //   type: 'restaurant',
    //   info: {
    //     id: '334476',
    //     name: 'Dominos',
    //     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //     costForTwo: 40000,
    //     deliveryTime: 36,
    //     avgRating: '4.8',
    //     sla: {
    //       deliveryTime: 25
    //     }
    //   },
    // },
    // {
    //   type: 'restaurant',
    //   info: {
    //     id: '334477',
    //     name: 'McDonals',
    //     cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //     cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //     costForTwo: 40000,
    //     deliveryTime: 36,
    //     avgRating: '4.2',
    //     sla: {
    //       deliveryTime: 25
    //     }
    //   },
    // },
    ])
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);

    let [searchText, setSearchText] = useState("");

    useEffect(()=>{
      fetchData()
    }, []);

    const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();
      setListOfRestaurants(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurants(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      // console.log(json?.data?.cards)
      // console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)

      // Recursive function to find the 'restaurants' array in the JSON structure
/*       const findRestaurants = (obj) => {
        if (!obj) return null;
        
        // Check if the current object has the 'restaurants' key which is an array
        if (obj.hasOwnProperty('restaurants') && Array.isArray(obj.restaurants) && obj.restaurants.length > 0) {
          return obj.restaurants;
        }

        // If it's an array, iterate through its elements
        if (Array.isArray(obj)) {
          for (let item of obj) {
            const result = findRestaurants(item);
            if (result) return result;
          }
        } 
        // If it's an object, iterate through its keys
        else if (typeof obj === 'object') {
          for (let key in obj) {
            const result = findRestaurants(obj[key]);
            if (result) return result;
          }
        }

        return null;
      };

      const restaurants = findRestaurants(json?.data?.cards);

      if (restaurants) {
        // console.log(restaurants[0].info.name)
        setListOfRestaurants(restaurants);
        // console.log(listOfRestaurants);
        // listOfRestaurants.map((res)=> console.log(res.info.name))
      } else {
        throw new Error("Restaurants not found in API response");
      } */

    } catch (error) {
      console.warn("Failed to fetch live data, using mock data fallback.", error);
      // setListOfRestaurants(resList);
    }
  };

  // conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return (
  //     <Shimmer/>
  //   )
  // }

    return listOfRestaurants.length===0? <Shimmer/> : (
        <main className="main">
        <div className="section-2">
            <div className="wrapper">
              <div className="search-container">
                  <label htmlFor="search"></label>
                  <input 
                  id="search" 
                  type="text" 
                  placeholder="Search..." 
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}
                  />
                  <button 
                  className="search-btn" 
                  onClick={()=>{
                    /*
                    * filter the restaurants cards and update the UI
                    * searchText 
                    
                    */
                    let filteredRestaurant = listOfRestaurants.filter((res)=>{
                     return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilteredRestaurants(filteredRestaurant)
                    console.log(filteredRestaurant[0].info.avgRating)
                  }}
                  >Search</button>
              </div>
              <div className="filter">
                  <button className="filter-btn" onClick={()=> {
                      let filteredRestaurant = listOfRestaurants.filter(
                          (res) => res.info.avgRating > 4
                      );
                      setFilteredRestaurants(filteredRestaurant)
                    filteredRestaurant.map((res) => console.log(res.info.avgRating)
)
                  }}>Top Rated Restaurant</button>
              </div>
            </div>
            <div className="res-container">
                {/* <RestaurantCard 
                resData = {resList[0]}/> */}

                {/* let's refactor this also */}

                {/* {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
                ))} */}

                {/* some ppl also set key as index which is not recommended by official React docs 
                use index as key only when you don't have unique id but not recommended index as key is a last resort
                */}

                {filteredRestaurants.map((restaurants, index) => (
                    <RestaurantCard key={index} resData = {restaurants} />
                ))}
                {/* whenever you're looping multple component then it's mandatory to give key propery */}

            </div>
        </div>
    </main>
    )
}

export default Body;