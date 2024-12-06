import { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex bg-pink-100">
      <Logo />
      <div className="ml-auto">
        <ul className="flex space-x-20 pt-10">
          <li>
            <Link className="text-blue-600" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-600" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-blue-600" to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <Link className="text-blue-600" to="/instamart">
              Instamart
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto mt-10 ">{isOnline ? "🟢" : "🔴"}</div>
      <div className="ml-2 mt-10 font-bold">{user.name}</div>

      {loggedIn ? (
        <button
          className="bg-white ml-auto mr-20 mt-11 mb-10 p-2"
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-white ml-auto mr-20 mt-11 mb-10 p-2"
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
