import { useContext } from "react";
import { GlobalContext } from "./../context/globalContext";

export default function View() {
  const { globalContext } = useContext(GlobalContext);
  return (
    <main>
      <div>
        <p>Global name (updates live as you change it):{globalContext.name}</p>
        <p>Global email (form must be submitted):{globalContext.emial}</p>
      </div>
    </main>
  );
}
