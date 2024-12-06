import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import UserContext from "../utils/UserContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "sai",
    email: "sai@gmail.com",
  });
  return (
    <div>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
