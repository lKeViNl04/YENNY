import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const items = [
    { name: "home", svg: "/icons/sprite.svg#Home" ,link: "/admin"},
    { name: "User", svg: "/icons/sprite.svg#SearchUser",link: "/admin/user" },
    { name: "Product", svg: "/icons/sprite.svg#SearchProduct",link: "/admin/product" },
    { name: "Ecommerce", svg: "/icons/sprite.svg#Ecommerce", link: "/" },
  ];
  useEffect(() => {
    const sidebar = document.querySelector("aside");
    const maxSidebar = document.querySelector(".max");
    const miniSidebar = document.querySelector(".mini");
    const maxToolbar = document.querySelector(".max-toolbar");

    function openNav() {
      if (sidebar.classList.contains("-translate-x-48")) {
        sidebar.classList.remove("-translate-x-48");
        sidebar.classList.add("translate-x-none");
        maxSidebar.classList.remove("hidden");
        maxSidebar.classList.add("flex");
        miniSidebar.classList.remove("flex");
        miniSidebar.classList.add("hidden");
        maxToolbar.classList.add("translate-x-0");
        maxToolbar.classList.remove("translate-x-24", "scale-x-0");
      } else {
        sidebar.classList.add("-translate-x-48");
        sidebar.classList.remove("translate-x-none");
        maxSidebar.classList.add("hidden");
        maxSidebar.classList.remove("flex");
        miniSidebar.classList.add("flex");
        miniSidebar.classList.remove("hidden");
        maxToolbar.classList.add("translate-x-24", "scale-x-0");
        maxToolbar.classList.remove("translate-x-0");
      }
    }

    window.openNav = openNav;
  }, []);

  return (
    <aside className="w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-full bg-accent-green">
      <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4  border-accent-blue  absolute top-2 rounded-full h-12">
        <div className="flex pl-4 items-center ">
          <div className="relative group w-30 inline-block">
            <img
              src="/img/YennyLogo.svg"
              alt="logo"
              className="w-22 block transition-opacity duration-300 opacity-100 group-hover:opacity-0 "
            />
            <img
              src="/img/ElateneoLogo.svg"
              alt="logo hover"
              className="w-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => window.openNav()}
        className="-right-6 transition transform ease-in-out duration-500 flex border-4  border-accent-blue bg-accent-green hover:bg-accent-blue absolute top-2 p-3 rounded-full text-white hover:rotate-45"
      >
        <svg className="w-4 h-4 ">
          <use href="/icons/sprite.svg#FourBox" />
        </svg>
      </div>
      {/* MAX SIDEBAR*/}
      <div className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
        {items.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="group hover:ml-4 w-full text-white hover:text-accent-blue bg-accent-green p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
              <svg className="w-4 h-4 fill-white group-hover:fill-accent-blue">
                <use href={item.svg} />
              </svg>
              <div>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
      {/* MINI SIDEBAR*/}
      <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">

        {items.map((item, index) => (
          <Link to={item.link} key={index}>
          <div  key={index} className=" group hover:ml-4 justify-end pr-5 w-full bg-accent-green p-3 rounded-full transform ease-in-out duration-300 flex">
            <svg className="w-4 h-4 fill-white group-hover:fill-accent-blue">
              <use href={item.svg} />
            </svg>
          </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
