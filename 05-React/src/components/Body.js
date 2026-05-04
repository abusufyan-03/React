import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
// import resList from "../utils/mockData"

import { useState } from "react";
const Body = () => {

    // state Variable - super powerful
    let [listOfRestaurants, setRestaurants] = useState([
          {
      type: 'restaurant',
      data: {
        id: '334475',
        name: 'KFC',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '3.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334476',
        name: 'Dominos',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334477',
        name: 'McDonals',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.2',
      },
    },
    ])

    // * Normal JS Variable
  // let listOfRestaurantsJs = [
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334475',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '3.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334476',
  //       name: 'Dominos',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334477',
  //       name: 'McDonals',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.2',
  //     },
  //   },
  // ];

    return (
        <main className="main">
        <div className="section-2">
            {/* <div className="search-container">
                <label htmlFor="search"></label>
                <input id="search" type="text" placeholder="Search..." />
                <button className="search-btn">Search</button>
            </div> */}
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    let filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setRestaurants(filteredRestaurant)

                    console.log(filteredRestaurant)
                }}>Top Rated Restaurant</button>
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

                {listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} resData = {restaurant} />
                ))}
                {/* whenever you're looping multple component then it's mandatory to give key propery */}

            </div>
        </div>
    </main>
    )
}

export default Body;