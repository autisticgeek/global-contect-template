import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../context/Cart";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart.length);

  useEffect(() => {
    console.log(cart)
    let newCartItems = 0;
    cart.map((item) => {
      newCartItems = item.quanity + newCartItems;
      return null; 
    });
    setCartItems(newCartItems)
    return () => {};
  }, [cart]);

  return (
    <header>
      <nav>
        <Link to="/">INPUT</Link>
        <Link to="/view">VIEW</Link>
        <Link to="/cart">CART ({cartItems})</Link>
      </nav>
    </header>
  );
}
