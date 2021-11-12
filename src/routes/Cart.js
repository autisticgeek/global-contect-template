import { useContext, useState } from "react";
import uuid from "react-uuid";
import { CartContext } from "./../context/Cart";

export default function Cart() {
  const { cart, addToCart, deleteFromCart, updateQuanity } =
    useContext(CartContext);
  const [newItem, setNewItem] = useState({ name: "", quanity: 1 });

  const rows = cart?.map((item) => (
    <tr key={item?.id}>
      <td>
        <input
          type="number"
          value={item?.quanity}
          style={{ width: `${item?.quanity.toString().length + 4}ch` }}
          onChange={(e) => {
            if (!isNaN(parseInt(e.target.value)))
              updateQuanity({
                id: item?.id,
                quanity: parseInt(e.target.value),
              });
          }}
        />
      </td>
      <td>{item?.name}</td>
      <td>
        <button onClick={() => deleteFromCart(item?.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <main>
      <div>
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <table>
            <tbody>{rows}</tbody>
          </table>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addToCart({
              id: uuid(),
              name: newItem.name,
              quanity: parseInt(newItem.quanity),
            });
            setNewItem({ name: "", quanity: 1 });
          }}
        >
          <label>
            Name of item to add
            <input
              placeholder="item name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </label>
          <label>
            How many
            <input
              type="number"
              min="1"
              required
              value={newItem.quanity}
              onChange={(e) =>
                setNewItem({ ...newItem, quanity: e.target.value })
              }
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </main>
  );
}
