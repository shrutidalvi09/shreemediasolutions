import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 mb-4">
              <img src={item.img} alt={item.title} className="w-20" />

              <h2>{item.title}</h2>
              <p>{item.price}</p>

              <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}