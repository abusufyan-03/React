import { useState } from "react";
const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true)

    // check online/offline
    window.addEventListener("online", () =>{
        setOnlineStatus(true);
    });

    window.addEventListener("offline", ()=>{
        setOnlineStatus(false);
    })

    // boolean
    return onlineStatus;
}
export default useOnlineStatus;