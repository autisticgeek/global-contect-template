import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">INPUT</Link>
        <Link to="/view">VIEW</Link>
      </nav>
    </header>
  );
}
