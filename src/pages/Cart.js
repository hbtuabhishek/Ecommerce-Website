import StoreItem from "../components/StoreItem";

const Cart = ({cart, setcart}) => {
    return (
        <div>
            <span style={{fontSize: 30}}>my cart</span>
            <br/>
            <span style={{fontSize: 30}}>Total</span>
            <div className="g-3">
                {
                    cart.map(item=>(
                        <StoreItem item={item} key={item.id} cart={cart} setcart={setcart}/>
                    ))
                }
            </div>
        </div>
    )
    }
    export default Cart;