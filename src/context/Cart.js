import { createContext, useState } from "react";
const ACTIONS = {
  ADD_TO_CART: "add_to_cart",
  DELETE_FROM_CART: "delete_from_cart",
  UPDATE_QUANITY: "update_quanity",
};

export const CartContext = createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const reducer = (action) => {
    // console.log(action);
    switch (action.type) {
      default:
        break;
      case ACTIONS.ADD_TO_CART:
        let itemNames = cart.map((item) => item.name);
        if (itemNames.includes(action.payload.name)) {
          let newArray = cart;
          let position = itemNames.indexOf(action.payload.name);
          newArray[position].quanity =
            newArray[position].quanity + action.payload.quanity;
          // console.log(newArray);
          setCart(newArray.length)
          setCart(newArray);
          break;
        }
        setCart([...cart, action.payload]);
        break;
      case ACTIONS.DELETE_FROM_CART:
        setCart(cart.filter((item) => item.id !== action.payload));
        break;
      case ACTIONS.UPDATE_QUANITY:
        setCart(
          cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                id: item.id,
                name: item.name,
                quanity: action.payload.quanity,
              };
            }
            return item;
          })
        );
        break;
    }
  };

  const addToCart = (payload) =>
    reducer({ type: ACTIONS.ADD_TO_CART, payload });
  const deleteFromCart = (payload) =>
    reducer({ type: ACTIONS.DELETE_FROM_CART, payload });
  const updateQuanity = (payload) => {
    if (payload.quanity <= 0) {
      reducer({ type: ACTIONS.DELETE_FROM_CART, payload: payload.id });
    } else {
      reducer({ type: ACTIONS.UPDATE_QUANITY, payload });
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteFromCart, updateQuanity }}
    >
      {children}
    </CartContext.Provider>
  );
}
