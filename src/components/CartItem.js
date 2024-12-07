import { IMG_URL } from "./constants";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className=" bg-pink-100 w-72 h-96 p-2 ml-10 mt-3">
      <img
        className="h-3/4 w-auto"
        src={IMG_URL + item.imageId}
        alt="menu-logo"
      />
      <h1>{item.name}</h1>
      <h1>Rs. {item.price / 100}</h1>
      <h1>quant: {item.quantity}</h1>
    </div>
  );
};

export default CartItem;
