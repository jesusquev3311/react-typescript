import { Link } from "react-router-dom";

import "./NavBar.css";
import { JSX } from "@emotion/react/jsx-runtime";

interface ListItem {
  text: string;
  link: string;
}
interface NavbarProps {
  items: ListItem[];
  rigth?: React.ReactNode;
}

const Navbar = ({ rigth, items }: NavbarProps) => {
  const renderItems = (): JSX.Element[] => {
    return (
      items &&
      items.map((item, index) => {
        return (
          <li key={index} className="navbar-item">
            <Link to={item.link}>{item.text}</Link>
          </li>
        );
      })
    );
  };

  return (
    <nav>
      <ul className="navbar">
        {renderItems()}
        {rigth && <li className="navbar-item">{rigth}</li>}
      </ul>
    </nav>
  );
};

export default Navbar;
