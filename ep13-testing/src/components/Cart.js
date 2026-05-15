import { useDispatch, useSelector } from "react-redux";
import { CDN_SMALL } from "../utils/constant";
import { clearItem } from "../utils/cartSlice";
const Cart = () =>{

    // always store portion of the store not the whole store
    const cartItem = useSelector((store)=> store.cart.items);
    console.log(cartItem)

    const disPatch = useDispatch()

    const handleClearCart = () =>{
        disPatch(clearItem())
    }
    return(
        <>
        <h1 className="text-center text-2xl font-semibold pt-6">Cart</h1>
        { cartItem.length ===0 && (
                <h1 className="text-center text-2xl">Your cart is empty add item</h1>
            )}
        
        <div className="p-4 mx-auto md:w-lg lg:w-210">
            { cartItem.length !==0 && (
                <button className="py-1.5 px-5 border rounded-lg cursor-pointer hover:bg-black hover:text-white font-semibold"
            onClick={handleClearCart}>Clear Cart</button>
            )}
        {cartItem.map((item, itemIndex)=>
            <div key={itemIndex} className={`item-card p-4 flex justify-between border-b`}>
                        <div className="item-info w-1/2" key={itemIndex}>
                            <div className="name-price flex pr-3">
                                <h3 className="item-name font-semibold mb-2">{item.card.info.name}</h3>
                                <span className="item-price font-semibold">{`₹${item.card.info.defaultPrice / 100}`}</span>
                            </div>
                            <p className="item-description text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="item-image-container w-32 h-32 relative">
                            <img
                                className="item-image rounded-lg object-cover w-full h-full"
                                src={`${CDN_SMALL}/${item.card.info.imageId}`}
                                alt={item.card.info.name}
                            />
                        </div>
                    </div>
        )}
        </div>
        </>
    )
}
export default Cart;