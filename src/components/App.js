import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import UserContext from "../utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../utils/store";

const App = () => {
  const [user, setUser] = useState({
    name: "sai",
    email: "sai@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
