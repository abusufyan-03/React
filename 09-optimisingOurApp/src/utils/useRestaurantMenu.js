import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constant";

const useRestaurantMenu = (redId) =>{
    const [resInfo, setResInfo] = useState([]);
    // fetch the data
    useEffect(() => {
        fetchResMenuData();
    }, [])
    const fetchResMenuData = async () => {
        // const data = await fetch(`${RES_MENU_API + 774091}`)

        try {
            const data = await fetch(RES_MENU_API + redId.id);
            console.log('Status', data.status);
            console.log('Headers:', data.headers);
            const json = await data.json();
            console.log('Json Response', json)

            if (!json) {
                console.error('Empty Response recieved')
                return;
            }
            console.log(json)
            setResInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.categories)
            // console.log("ResInfo:", resInfo)
        } catch (error) {
            console.error("Error", error)
        }
    }


    return resInfo;
}
export default useRestaurantMenu;