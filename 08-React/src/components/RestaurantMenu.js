import { useEffect, useState } from "react";
import { MOCK_RES_MENU_DATA } from "../utils/mockResMenu";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchData();
    })

    const fetchData = () => {
        setResInfo(MOCK_RES_MENU_DATA)
        console.log(MOCK_RES_MENU_DATA)
    }

    const {name, cuisines, costForTwoMessage} = MOCK_RES_MENU_DATA.data.cards[2].card.card.info;

    const {title, itemCards} = MOCK_RES_MENU_DATA.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card


    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} {costForTwoMessage}</h2>
            <ul>
                <li><h3>{title}</h3></li>
                {itemCards.map((item) => <li key={item.id}>{item.card.info.name}</li>)}
               {/* <li><h3>{itemCards[0].card.info.name}</h3></li> */}

            </ul>

        </div>
    )
}

export default RestaurantMenu;