"use client";
import { useState, useEffect } from "react";
import Login from "./Components/Login";
import Ripples from "react-ripples";
import { Zoom } from "react-awesome-reveal";
import Signin from "./Components/Signin";

export default function Page() {
  const [loadpage, setLoadPage] = useState(true);
  const [activeform, setActiveForm] = useState("Log in");
  const AccountDetails = [
    { button: "Log in", state: "Log in" },
    { button: "Sign in", state: "Sign in" },
  ];

  useEffect(() => {
    const Timer = setTimeout(() => {
      setLoadPage(false);
    }, 3000);
    return () => clearTimeout(Timer);
  }, []);
  return (
    <>
      {loadpage ? (
        <div className=" flex items-center fixed gap-3 flex-col h-[100%] w-full justify-center">
          <div className=" w-[60px] h-[60px] rounded-full p-1 border-2 border-slate-900 flex items-center justify-center animate-spin border-l-white">
            <div className=" bg-slate-900 h-[30px] w-[30px] rounded-full animate-ping"></div>
          </div>
        </div>
      ) : (
        <section className="h-[screen] w-[100%] bg-slate-700 py-16">
          <div className=" w-auto flex items-center justify-center  py-5">
            <div className=" bg-white w-[90%] lg:w-[40%] md:w-[65%] sm:w-[70%]   flex items-center justify-center  rounded-lg py-2 px-3">
              {AccountDetails.map((account, index) => (
                <Ripples
                  key={index}
                  className={` ${
                    activeform === `${account.state}`
                      ? " bg-cyan-500"
                      : " bg-slate-900"
                  }  border-t-2 border-slate-100  cursor-default md:cursor-pointer  text-center text-md text-white rounded-md font-medium w-auto  mx-2 px-2`}
                >
                  <button
                    onClick={() => setActiveForm(account.state)}
                    className={` flex items-center cursor-default md:cursor-pointer  py-3  w-[200px] justify-center`}
                  >
                    {account.button}
                  </button>
                </Ripples>
              ))}
            </div>
          </div>

          {activeform === "Log in" && (
            <Zoom>
              <Login />
            </Zoom>
          )}
          {activeform === "Sign in" && (
            <Zoom>
              <Signin />
            </Zoom>
          )}
        </section>
      )}
    </>
  );
}
