"use client";
import Link from "next/link";
import { useState } from "react";
import Ripples from "react-ripples";

export default function SearchField() {
  const [searchTerm, setSearchTearm] = useState("");

  const Data = [
    { id: 0, heading: "Dashboard", Links:"/Dashboard" },
    { id: 1, heading: "Settings", Links:"/Settings"},
    { id: 2, heading: "Users", Links:"/Users" },
    { id: 3, heading: "Profile", Links:"/Profile" },
    { id: 4, heading: "Upgrade", Links:"/Upgrade" },
    { id: 5, heading: "Logout", Links:"/Logout" },
  ];

  const FilterData = Data.filter((value) => {
    if (searchTerm == "") {
      return value;
    } else if (
      value.heading.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return value;
    }
  });

  return (
    <>
      <div className=" text-white relative w-[100%] flex flex-col">
        <input
          type="text"
          onChange={(event) => setSearchTearm(event.target.value)}
          placeholder="Search.."
          autoFocus="on"
          className=" text-black outline-none border-[1px] rounded-md py-2 px-2 my-2"
        />
        {searchTerm === "" ? (
          <h1 className=" text-center font-normal font-Poppins text-md">
            {" "}
            Type something...
          </h1>
        ) : FilterData.length === 0 ? (
          <h1 className=" w-[100%] text-center">
            Coulnd not find anything like {searchTerm}
          </h1>
        ) : (
          FilterData.map((value) => (
            <ul key={value.id} className={`text-md font-normal `}>
              <Ripples className=" w-full">
                <Link href={value.Links} className="w-[100%]">
                  <li className=" py-2 hover:bg-slate-700 w-[100%] cursor-none md:cursor-pointer font-Poppins rounded-md px-3">
                    {value.heading}
                  </li>
                </Link>
              </Ripples>
            </ul>
          ))
        )}  
      </div>
    </>
  );
}
