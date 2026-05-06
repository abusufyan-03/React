import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constant";
const useRestaurantMenuData = (resId) =>{
    const [resInfo, setResInfo] = useState([]);
    // calling API


    useEffect(()=>{
        fetchData();
        // console.log("useEffect from useRes")
    },[])

    const fetchData = async() =>{

        try {
            const data = await fetch(RES_MENU_API + resId.id);
            // console.log('Status', data.status);
            // console.log('Headers:', data.headers);
            const json = await data.json();
            // console.log('Json Response', json)

            if (!json) {
                console.error('Empty Response recieved')
                return;
            }
            // console.log(json)
            // setResInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.categories)

            // console.log("Res-Menu: ", json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card)

            const cat = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((cat)=> cat.card.card.categories );
            console.log("cat", cat)

            // console.log("Testing", json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

            const cat2 = cat.flatMap((cat)=> cat.card.card.categories)
            console.log("cat2", cat2);

            // const cat3 = cat2.map((cat2)=> cat2.card.card.categories)
            // console.log("Cat3", cat3)

            setResInfo(cat2)
        } catch (error) {
            console.error("Error", error)
        }
    }
    return resInfo;
}
export default useRestaurantMenuData;