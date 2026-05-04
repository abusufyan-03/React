import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
/* 
# Header
   - logo
   - NavItems
# Body
   - Search
   - RestaurantContainer
     - RestaurantCard
# Footer
   - Copyright
   - Links
   - Address
   - Contact
*/




/* const RestaurantCard = () => {
    return (
    <div className="res-card">
        <div className="media">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1693357212/e683cfeb39647871ccdc4978222ccc1f.jpg" />
            <h3 className="res-name">Shaken & Stirred</h3>
        </div>
        <div className="res-info">
            <div className="cuisine">
                <div>
                    Mangalorean
                <span> • </span>
                North Indian
                </div>
                <div>
                    $800 for two
                </div>
            </div>
            <div className="address">
                <div>
                    Shivananda Complex, High...
                </div>
                <div>3.8 km</div>
            </div>
            <div className="table-booking">Tabel Booking</div>
            <div className="discount">
                <div>Flat 10% off on walk-in</div>
                <div>+1more</div>
            </div>
            <div className="offer">
                <div>Up to 10% off with bank offers</div>
            </div>
        </div>
    </div>
    )
} */


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
{            <Body/>
}        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)