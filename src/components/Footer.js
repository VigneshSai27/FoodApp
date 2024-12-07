import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext); // UserContext.Consumer is used for class components
  return (
    <div className="text-center p-4">footer - Made with 💓 by {user.name}</div>
  );
};

export default Footer;
