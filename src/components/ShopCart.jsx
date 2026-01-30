import { useState } from "react";
import ShopItem from "./ShopItem";

export default function ShopCart() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const updateItemCount = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };


  const removeItem = (id) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const removeItems = () => {
    setCart([]);
  };

  return (
    <div className="container">
      {cart.map((item) => (
        <ShopItem
          cartItem={item}
          onUpdateCount={() => updateItemCount()}
          onRemove={() => removeItem(item.id)}
        />
      ))}
      <button onClick={() => removeItems()}>Очистить корзину</button>
    </div>
  );
}
