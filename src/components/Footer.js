import { useContext } from "react";
import { GlobalContext } from "./../context/globalContext";

export default function Fooder() {
  const { globalContext } = useContext(GlobalContext);
  return (
    <footer>
     {globalContext.name!==""?`${globalContext.name} is awesome!`:"This is a footer. Not much to see."}
    </footer>
  )
}
