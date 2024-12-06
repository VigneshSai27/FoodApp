import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext); // UserContext.Consumer is used for class components
  return <>footer - Made with 💓 by {user.name}</>;
};

export default Footer;
