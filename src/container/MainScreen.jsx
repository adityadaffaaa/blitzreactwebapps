// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import Beranda from "./pages/Beranda.js";
var MainScreen = () => {
  return (
    <>
      <NavBar />
      <Beranda />
    </>
  );
};

export default MainScreen;
