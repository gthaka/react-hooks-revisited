import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <>
      <Link to="/">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>
      <Link to="/">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Link>
    </>
  );
};

export default Header;
