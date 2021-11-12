import { useContext, useState } from "react";
import { GlobalContext } from "./../context/globalContext";
import { CartContext } from "./../context/Cart";

export default function Input() {
  const { updateEmail, updateName, globalContext } = useContext(GlobalContext);
  const [componentState, setComponentState] = useState("");
  const [email, setEmail] = useState("");

  const { addToCart } = useContext(CartContext);
  return (
    <main>
      <div>
        <label>
          <strong>Global Context:</strong> This field update global state as you
          change it. It changes any component that is watching the context. including the footer of this page.
          <input
            placeholder="Your name"
            value={globalContext.name}
            onChange={(e) => updateName(e.target.value)}
          />
        </label>

        <label>
          <strong>Component State:</strong> This field update only this
          component as you change it.
          <input
            placeholder="Component State"
            value={componentState}
            onChange={(e) => setComponentState(e.target.value)}
          />
        </label>
        {/* check of empty string, id so insert zero width space to presurve placement */}
        <p>{componentState === "" ? "​" : componentState}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const button = document.getElementById("submitButton");
            button.disabled = true;
            updateEmail(email);
            button.disabled = false;
          }}
        >
          <label>
            <strong>Global onSubmit:</strong> This field update as you change
            it, but only updates global when submitted
            <input
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="Submit" id="submitButton">
            Save Email
          </button>
        </form>
        <hr />
        <button
          onClick={() =>
            addToCart({
              id: "5d288fd-1b2a-d070-a434-312cd4b764b4",
              name: "Bowling Ball",
              quanity: 1,
            })
          }
        >
          Add A Bowling Ball To Cart
        </button>
      </div>
    </main>
  );
}
