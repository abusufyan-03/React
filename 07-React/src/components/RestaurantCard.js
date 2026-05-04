import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(resData.info)
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info
    const {deliveryTime} = resData?.info.sla

    return (
    <div className="res-card">
        <div className="media">
            <img className="res-img" src={CDN_URL + cloudinaryImageId} />
            {/* <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.avgRating} star</h4>
            <h4>₹{resData.data.costForTwo/100}  FOR TWO</h4>
            <h4>{resData.data.deliveryTime} minutes</h4> */}

            {/* let's Destructue */}
            
            <div className="food-info">
                <div className="food-name">
                    <h3 className="name">{name}</h3>
                    <h4 className="cuisines">{cuisines.join(", ")}</h4>
                </div>
                <div className="food-detail">
                    <h4>{avgRating} star</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{deliveryTime} minutes</h4>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default RestaurantCard;