import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header.js'
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestrauantMenu from "./components/RestrauantMenu.js";
import Usercontxt from "./Utils/Usercontxt.js";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore.js";
import Cart from "./components/Cart.js";

const Grocer = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [UserName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "satya"
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <Usercontxt.Provider value={{ loggedIn: UserName, setUserName }}>
        <div>
          <Routes>
            <Route path="/" element={ <Header />}>
            <Route  index element={<Body />} />
            <Route path="/Grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocer /></Suspense>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/restrauMenu/:resId" element={<RestrauantMenu />} />
            <Route path="/cart" element={<Cart />} />
            </Route>
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

