import { React, useState } from "react";
import Logo from "../assets/Blitz Logo.png";
import WhiteLogo from "../assets/Blitz Logo White.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [clicked, setClick] = useState(false);
  let MenuNonActive = ["w-full h-[100vh] bg-primary sm:bg-secondary transition-default fixed z-[150] top-0 opacity-0 hidden flex-col justify-center items-center gap-6 lg:hidden"];
  let MenuActive = ["w-full h-[100vh] bg-primary sm:bg-secondary transition-default fixed z-[150] top-0 opacity-100 flex flex-col justify-center items-center gap-6 lg:hidden"];
  let HamburgerNonActive = ["flex flex-col h-full w-6 justify-around items-end lg:hidden "];
  let HamburgerActive = ["flex flex-col h-full w-6 justify-around items-end lg:hidden hamburger-active"];
  const ToggleHamburger = () => {
    if (clicked) {
      return HamburgerActive;
    } else {
      return HamburgerNonActive;
    }
  };
  const MenuRes = () => {
    if (clicked) {
      return MenuActive;
    } else {
      return MenuNonActive;
    }
  };
  return (
    <header>
      <nav className="w-full transition-default sm:shadow-default py-4 lg:py-0 flex justify-center bg-primary fixed top-0 z-[99999] sm:bg-background1">
        <div className="w-[90%] flex justify-between items-center">
          <img className="h-6 sm:hidden" src={WhiteLogo} alt="" />
          <img className="h-6 hidden sm:block" src={Logo} alt="" />
          <ul className="lg:flex translate-x-8 hidden">
            <li>
              <Link className="nav-active" to="#">
                Beranda
              </Link>
            </li>
            <li>
              <Link className="nav-non-active" to="/">
                Jasa Kami
              </Link>
            </li>
            <li>
              <Link className="nav-non-active" to="/">
                Riwayat
              </Link>
            </li>
            <li>
              <Link className="nav-non-active" to="/">
                Portofolio
              </Link>
            </li>
            <li>
              <Link className="nav-non-active" to="/">
                Ulasan
              </Link>
            </li>
          </ul>
          <div className="lg:flex items-center gap-1 hidden">
            <p className="text-paragraph2">
              Halo,{" "}
              <Link to="/" className="text-paragraph1 text-primary">
                Guest
              </Link>
            </p>
            <Link to="/" className="h-10 w-10 overflow-hidden rounded-full cursor-pointer">
              <span className="fill-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </span>
            </Link>
          </div>
          <button
            id="hamburger"
            onClick={() => {
              setClick(!clicked);
            }}
            name="hamburger"
            className={ToggleHamburger()}
          >
            <span className="menu-hamburger"></span>
            <span className="menu-hamburger-tengah"></span>
            <span className="menu-hamburger"></span>
          </button>
        </div>
      </nav>
      <menu id="sub-menu" className={MenuRes()}>
        <Link to="/" className="flex flex-row fill-text2 text-text2 items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
          <p className="text-heading5">Guest</p>
        </Link>
        <ul className="flex flex-col items-center gap-8 text-text2 text-heading3 font-poppins">
          <li>
            <Link className="active after:content-[''] after:w-full after:h-1 after:absolute after:-bottom-1 after:right-0 after:bg-background1 relative" to="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link className="after:content-[''] after:w-0 after:h-1 after:absolute after:-bottom-1 after:right-0 after:bg-background1 relative after:transition-all after:ease-in-out after:duration-500 hover:after:w-full" to="/">
              Jasa Kami
            </Link>
          </li>
          <li>
            <Link className="after:content-[''] after:w-0 after:h-1 after:absolute after:-bottom-1 after:right-0 after:bg-background1 relative after:transition-all after:ease-in-out after:duration-500 hover:after:w-full" to="/">
              Riwayat
            </Link>
          </li>
          <li>
            <Link className="after:content-[''] after:w-0 after:h-1 after:absolute after:-bottom-1 after:right-0 after:bg-background1 relative after:transition-all after:ease-in-out after:duration-500 hover:after:w-full" to="/">
              Portofolio
            </Link>
          </li>
          <li>
            <Link className="after:content-[''] after:w-0 after:h-1 after:absolute after:-bottom-1 after:right-0 after:bg-background1 relative after:transition-all after:ease-in-out after:duration-500 hover:after:w-full" to="/">
              Ulasan
            </Link>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default NavBar;
