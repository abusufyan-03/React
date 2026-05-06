import { CDN_SMALL } from "../utils/constant";
const ItemList = ({item}) =>{
    console.log("ITEM: ", item.card.info.name)
    const {name, price, description, defaultPrice, imageId} = item.card.info
    return(
        <>
         {/* itemCard */}
        <li className="p-4 flex justify-between">
            {/* item info */}
            <div className="w-1/2">
                {/* name and price */}
                <div className="flex pr-3">
                    <h3 className="font-semibold mb-2">{name}</h3>
                    <span className="font-semibold">₹{defaultPrice/100 || item.card.info.price/100}</span>
                </div>
                <p className="text-sm">{description}</p>
            </div>
            {/* Imagecontainer */}
            <div className="w-32 h-32 relative">
                <img className="" src={`${CDN_SMALL}/${imageId}`} />
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 font-semibold bg-white text-green-600 border-0 px-4 py-1 rounded-lg shadow-sm text-sm cursor-pointer">Add+</button>
            </div>
        </li>
        </>
    )
}

export default ItemList;