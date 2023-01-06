import NavBar from "../components/NavBar.js";
import Beranda from "./pages/Beranda.js";
import { BrowserRouter } from "react-router-dom";
var MainScreen = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Beranda />
    </BrowserRouter>
  );
};

export default MainScreen;
