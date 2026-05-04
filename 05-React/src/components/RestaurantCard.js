import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(resData.data)
    const {
        name, 
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.data

    return (
    <div className="res-card">
        <div className="media">
            <img className="res-img" src={CDN_URL} />
            {/* <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            <h4>{resData.data.avgRating} star</h4>
            <h4>₹{resData.data.costForTwo/100}  FOR TWO</h4>
            <h4>{resData.data.deliveryTime} minutes</h4> */}

            {/* let's Destructue */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>₹{costForTwo/100}  FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
        
    </div>
    )
}

export default RestaurantCard;