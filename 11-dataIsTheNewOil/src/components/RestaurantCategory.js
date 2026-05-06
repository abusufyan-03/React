import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({category}) =>{
    console.log("cateogry", category)
    const [showItem, setShowItem] = useState(false)
    const handleToggle = () =>{
        setShowItem(!showItem)
    }
    return(
        <>
        {/* accordian section */}
        <div className="p-4 mx-auto md:w-lg lg:w-210">
            {/* Cateogry header */}
                <div key={category.categoryId} className={`text-lg font-semibold cursor-pointer p-4 bg-slate100 flex justify-between border rounded-lg ${showItem? "bg-slate-200 rounded-b-none border-b-0": ""}`} onClick={()=>handleToggle()}>
                    <h2>{category.title} <span>({category.itemCards.length})</span></h2><span className="showItem-icon">{showItem? "⬆️": "⬇️"}</span>
                </div>

                {/* ItemList */}
                <ul className=" border border-t-0 rounded-b-lg">
                    {category.itemCards.map((item, itemIndex)=>(
                        
                       showItem && <ItemList key={item.card.info.id} item={item}/>
                        ))}
                </ul>
            </div>
        </>
    )
}
export default RestaurantCategory