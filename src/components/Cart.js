import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div>
        <h1 className="p-3 text-3xl font-bold">
          Cart Items - {cartItems.length}
        </h1>
        <button
          className="bg-lime-200 m-2 p-3"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Cart;
