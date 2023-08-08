"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { RxDashboard } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { MdEventBusy, MdSettingsSuggest } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { SiBaremetrics } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import Avatar from "@/public/testimonial-03.jpg";
import { TiContacts } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import Ripples from "react-ripples";
import SearchField from "./Search";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobilesearch, setMobileSearch] = useState(false);
  const navBarRef = useRef();
  const menuRef = useRef();
  const DropRef = useRef();
  const Search = useRef();
  const SearchBox = useRef();

  //Array storing my List items
  const List = [
    { text: "Dashboard", Links: "/Dashboard", icon: <RxDashboard /> },
    { text: "Users", Links: "/Users", icon: <BiUser /> },
    { text: "Settings", Links: "/Settings", icon: <MdSettingsSuggest /> },
    { text: "Log out", Links: "/Logout", icon: <CiLogout /> },
  ];

  //Array storing my Dropdown menu list items
  const Drop = [
    { text: "My Profile", icon: <BiUser />, Links: "/Profile" },
    { text: "My Contacts", icon: <TiContacts />, Links: "/Contact" },
    {
      text: "Account Settings",
      icon: <MdSettingsSuggest />,
      Links: "/Settings",
    },
    { text: "Log out", icon: <CiLogout />, Links: "/Logout" },
  ];
  function handleNavbarActive() {
    setActive(!active);
  }
  function handleDropdown() {
    setDropdown(!dropdown);
  }

  //This is what makes the user profile menu close when you are not clicking on it
  useEffect(() => {
    const handleClickOutsideofDropdown = (event) => {
      if (DropRef.current && !DropRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    window.addEventListener("click", handleClickOutsideofDropdown);
    return () => {
      window.removeEventListener("click", handleClickOutsideofDropdown);
    };
  }, []);

  //This is what makes the Navbar close when you are not clicking on it
  function handleOutsideClick(event) {
    if (
      !navBarRef.current.contains(event.target) &&
      !menuRef.current.contains(event.target)
    ) {
      setActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //This is what makes the Search box close when you are not clicking on it
  useEffect(() => {
    const handleSearching = (event) => {
      if (
        Search.current &&
        !Search.current.contains(event.target) &&
        SearchBox.current &&
        !SearchBox.current.contains(event.target)
      ) {
        setSearch(false);
      }
    };

    window.addEventListener("click", handleSearching);
    return () => {
      window.removeEventListener("click", handleSearching);
    };
  }, []);

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <>
      <header className="  bg-slate-900   z-[9999] fixed  w-full flex items-center justify-between h-[70px] left-0 top-0 px-5">
        <div className=" flex items-center gap-3">
          <span
            ref={menuRef}
            onClick={handleNavbarActive}
            className=" text-white  border-slate-700 border-[1px] p-[0.2rem] rounded  text-3xl"
          >
            <RxHamburgerMenu />
          </span>
          <Logo style={" text-4xl"} />
        </div>
        <div className="relative">
          <div className=" hidden lg:flex w-auto h-auto items-center ">
            <Ripples>
              <div ref={Search} onClick={handleSearch}>
                <button className=" flex items-center gap-2 outline-none font-Poppins bg-slate-700 text-white py-2 w-[250px] rounded">
                  <span className="  text-white pl-1 text-xl">
                    <BiSearch />
                  </span>
                  Search for anything...
                </button>
              </div>
            </Ripples>
          </div>
          {search && (
            <div
              ref={SearchBox}
              className={` bg-slate-900 px-2  rounded-md w-[100%] overflow-hidden h-[200px] top-11 absolute`}
            >
              <SearchField />
            </div>
          )}
        </div>

        <div className=" flex items-center gap-2">
          <div>
            <div className=" relative">
              <div
                ref={DropRef}
                onClick={handleDropdown}
                className=" flex items-center gap-4"
              >
                <Image
                  src={Avatar}
                  alt="myImage"
                  className=" h-[50px] w-[50px] rounded-full cursor-pointer"
                />
                <span
                  className={` ${
                    dropdown && "rotate-[180deg] duration-300"
                  } font-bold text-xl  text-white`}
                >
                  <FaAngleUp />
                </span>
              </div>
              {dropdown && (
                <div className=" absolute z-[999] font-Poppins gap-3 px-4 py-2 text-white flex flex-col  bg-slate-900  rounded-md  shadow-lg h-[auto] w-[250px]  right-2">
                  {Drop.map((list, index) => (
                    <Ripples
                      key={index}
                      className=" flex gap-3 group hover:bg-slate-700 py-2 rounded-md px-3 items-center"
                    >
                      <Link href={list.Links} className="flex gap-3">
                        <span className=" text-white  group-hover:text-sky-500 text-2xl">
                          {list.icon}
                        </span>
                        <h1 className=" text-sm font-medium">{list.text}</h1>
                      </Link>
                    </Ripples>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <aside
          ref={navBarRef}
          className={`${
            active ? "left-[0] duration-200" : "left-[-10000%] duration-200"
          }  h-[screen] flex flex-col top-0  w-72 z-[999] fixed left-0  bottom-0   bg-slate-900 `}
        >
          <div className=" overflow-y-auto">
            <div className=" flex items-center py-4 px-5 gap-2 ">
              <span className="  text-blue-500  text-4xl">
                <SiBaremetrics />
              </span>
              <h1 className=" font-bold text-white text-2xl">Sydmin</h1>
            </div>

            <div className=" flex flex-col justify-between gap-10 h-[full]  w-full">
              <ul className=" relative  px-3 py-4 flex w-full gap-3  flex-col justify-normal ">
                <div className=" lg:hidden">
                  <Ripples
                    onClick={() => setMobileSearch(!mobilesearch)}
                    className="bg-slate-700 py-2 px-3 flex items-center  gap-3 text-md rounded-md text-white w-[100%] mx-auto"
                  >
                    <div className=" flex items-center gap-3 w-[100%]">
                      <BiSearch />
                      Search....
                    </div>
                  </Ripples>
                </div>
                {mobilesearch && (
                  <div
                    ref={SearchBox}
                    className=" absolute z-[99] top-16 bg-slate-700 px-3 rounded-lg w-[90%] lg:hidden mx-auto h-[250px]"
                  >
                    <SearchField click={() => setMobileSearch(false)} />
                  </div>
                )}
                <h1 className=" font-Poppins text-sky-600 font-semibold">
                  MENU
                </h1>
                {List.map((list, index) => (
                  <Link
                    href={list.Links}
                    key={index}
                    className={`cursor-none md:cursor-pointer`}
                  >
                    <Ripples className=" flex gap-2 items-center py-2 px-2 rounded-md w-full   hover:bg-slate-600">
                      <h1 className=" text-white text-2xl">{list.icon}</h1>
                      <li
                        className={`font-Poppins cursor-none md:cursor-pointer  font-light  text-white text-md`}
                      >
                        {list.text}
                      </li>
                    </Ripples>
                  </Link>
                ))}
              </ul>

              <div className=" border-[1px]  flex flex-col justify-around rounded-lg w-[90%] text-white h-[200px] text-center font-Poppins mx-auto my-4">
                <div>
                  <h1 className=" text-xl font-semibold ">Sydmin Pro</h1>
                  <p className=" text-sm  py-2">
                    Become a vip admin by Upgrading your Account
                  </p>
                </div>
                <Ripples className=" bg-slate-900 rounded-md w-[80%] mx-auto">
                  <button className=" bg-blue-700 py-3 px-4 w-full text-center font-medium">
                    Button
                  </button>
                </Ripples>
              </div>
            </div>
          </div>
        </aside>
        {active && (
          <div className=" fixed   top-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
        )}
      </header>
    </>
  );
}
