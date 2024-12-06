import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "abcde",
    email: "abcde@gmail.com",
  },
});

export default UserContext;
