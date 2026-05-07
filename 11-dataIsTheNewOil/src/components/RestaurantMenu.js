import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useParams } from "react-router";
import { CDN_SMALL } from "../utils/constant";
import useRestaurantMenuData from "../utils/useRestaurantMenuData"
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
   const [showIndex, setShowIndex] = useState(null);

    const resId = useParams();
    // console.log(resId)
    

    const resInfo = useRestaurantMenuData(resId);

    // console.log("resInfo", resInfo)

    return resInfo.length === 0 ? <RestaurantMenuShimmer /> : (
        <>
            <div className="menu-card">
                {resInfo.map((category, index)=> <RestaurantCategory key={category.categoryId} category={category}
                showItem={index === showIndex}
                categoryIndex={index}
                setShowIndex={setShowIndex}
                 />)
                 }
            </div>
        </>
    )
}

export default RestaurantMenu;