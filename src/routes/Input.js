import { useContext, useState } from "react";
import { GlobalContext } from "./../context/globalContext";
export default function Input() {
  const { updateEmail, updateName, globalContext } = useContext(GlobalContext);
  const [componentState, setComponentState] = useState("");
  const [email, setEmail] = useState("");
  return (
    <main>
      <div>
        <label>
          <strong>Global Context:</strong> This field update global state as you
          change it.
          <input
            placeholder="Global Name"
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
      </div>
    </main>
  );
}
