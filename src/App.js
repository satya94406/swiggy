import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header.js'
import Body from "./components/Body.js";
import About from "./components/Search.js";
import Contact from "./components/Offers.js";
import Error from "./components/Error.js";
import RestrauantMenu from "./components/RestrauantMenu.js";
import Usercontxt from "./Utils/Usercontxt.js";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore.js";
import Cart from "./components/Cart.js";
import MyAccount from "./components/MyAccount.js";
import Offers from "./components/Offers.js";
import Search from "./components/Search.js";
import Help from "./components/Help.js";
import SwiggyCorporate from "./components/SwiggyCorporate.js";
import Footer from "./components/Footer.js";

const Grocer = lazy(() => import("./components/Help.js"));

const AppLayout = () => {
  const [UserName, setUserName] = useState();
  const location = useLocation();

  useEffect(() => {
    const data = {
      name: "satya"
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <Usercontxt.Provider value={{ loggedIn: UserName, setUserName }}>
        <div >
        {location.pathname === "/swiggy" ? <Header /> : <MyAccount />}
          <Routes>
            <Route path="/" element={ <Body />}/>
            <Route path="/swiggy" element={<Body />} />
            <Route path="/swiggyCorporate" element={<SwiggyCorporate/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/restrauMenu/:resId" element={<RestrauantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Usercontxt.Provider>
    </Provider>
  );
}

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

