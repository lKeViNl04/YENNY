import { useState } from "react";
import Link from "./Link";
import NavLink from "./NavLink";
import NavButton from "./NavButton";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const { is_logueado, user, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex py-4 px-4 sm:px-10 min-h-[70px] tracking-wide z-50 shadow-md bg-black/20 hover:bg-black/40">
      <nav className="flex flex-wrap items-center justify-between gap-5 w-full  ">
        <a href="/" className="max-sm:hidden relative group w-36 inline-block">
          <img
            src="/img/YennyLogo.svg"
            alt="logo"
            className="w-27 block transition-opacity duration-300 opacity-100 group-hover:opacity-0 "
          />
          <img
            src="/img/ElateneoLogo.svg"
            alt="logo hover"
            className="w-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </a>
        <a href="/" className="hidden max-sm:block relative group w-9">
          <img
            src="/img/logoyenny.svg"
            alt="logo"
            className="W-full h-full block transition-opacity duration-300 opacity-100 group-hover:opacity-0 text-white"
          />
          <img
            src="/img/logoElAteneo.svg"
            alt="logo hover"
            className="w-full h-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </a>

        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-neutral-dark max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!block`}
        >
          <button
            id="toggleClose"
            onClick={handleToggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer "
          >
            <svg className="w-3.5 h-3.5 fill-black">
              <use href="/icons/sprite.svg#Equis" />
            </svg>
          </button>

          <ul className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-transparent max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="#" className="relative group w-36 block">
                <img
                  src="/img/YennyLogo.svg"
                  alt="logo"
                  className="w-27 block transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/img/ElateneoLogo.svg"
                  alt="logo hover"
                  className="w-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </a>
            </li>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {is_logueado && user && user.is_admin && <NavLink to="/admin">Admin</NavLink>}
          </ul>
        </div>

        <div className="flex max-lg:ml-auto  items-center space-x-4">
          {is_logueado ? (
            <>
              <NavButton onClick={handleLogout}>
                <svg className="w-10 h-8 fill-accent-red hover:fill-red-600 transition-colors duration-300">
                  <use href="/icons/sprite.svg#Exit" />
                </svg>
              </NavButton>

              <Link to="/profile">
                <svg className="w-12 h-8 fill-primary-dark hover:fill-blue-900 transition-colors duration-300">
                  <use href="/icons/sprite.svg#User" />
                </svg>
              </Link>
            </>
          ) : (
            <>
              <NavButton
                href="/login"
                className="text-white border border-primary-dark bg-transparent hover:bg-primary-dark"
              >
                Login
              </NavButton>

              <NavButton
                href="/signup"
                className="text-neutral-dark border border-accent-green bg-background hover:bg-accent-green hover:text-background transition-colors duration-300"
              >
                Sign up
              </NavButton>
              </>
          )}

          <Link to="/cart">
            <svg className="w-12 h-8 fill-primary-dark hover:fill-blue-900 transition-colors duration-300">
              <use href="/icons/sprite.svg#Cart" />
            </svg>
          </Link>

          <button
            id="toggleOpen"
            onClick={handleToggleMenu}
            className="lg:hidden cursor-pointer"
          >
            <svg className="w-8 h-8  fill-primary-dark">
              <use href="/icons/sprite.svg#BurguerMenu" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
