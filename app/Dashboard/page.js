"use client";
import Layout from "../Components/layout";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Barchart from "../Components/Barchart";
import { VscPreview } from "react-icons/vsc";
import Table from "../Components/Table";
import Ripples from "react-ripples";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loadpage, setLoadPage] = useState(true);
  const Cards = [
    {
      icons: <FaUsers />,
      sr: "Users icon",
      text: " Verified Users ",
      numbers: "234K",
    },
    {
      icons: <FaUserCheck />,
      sr: "User check icon",
      text: "Served Clients",
      numbers: "100M",
    },
    {
      icons: <VscPreview />,
      sr: "eye icon",
      text: "Reviews",
      numbers: "90K",
    },
    {
      icons: <MdAssuredWorkload />,
      sr: "House check icon",
      text: "Projects",
      numbers: "120K",
    },
  ];

  useEffect(() => {
    const Timer = setTimeout(() => {
      setLoadPage(false);
    }, 4000);
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
        <Layout>
          <div>
            <section className=" w-[100%] h-auto grid gap-5 px-3 sm:px-6 lg:px-10 pt-24  md:px-16 grid-cols-1 lg:grid-cols-2 ">
              <div className=" bg-slate-900 dark:bg-white rounded-md  w-[100%] flex items-center justify-center shadow-xl h-[320px]">
                <div className="  h-auto w-[100%]">
                  <Barchart />
                </div>
              </div>
              <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {Cards.map((card, index) => (
                  <Ripples key={index}>
                    <div className="  bg-slate-900 dark:bg-white  shadow-xl flex flex-col justify-between  py-5 lg:py-3 px-3 h-[160px] lg:h-[150px] rounded-lg w-[100%]">
                      <div className=" flex items-center justify-between px-7 lg:px-5 gap-2">
                        <div className=" font-bold lg:font-semibold text-xl md:text-2xl dark:text-black text-white">
                          {card.numbers}
                        </div>
                        <span
                          title={card.sr}
                          className=" bg-slate-600 dark:bg-gray-900  p-3 shadow-lg rounded-full text-red-500 dark:text-cyan-400 text-3xl lg:text-2xl"
                        >
                          {card.icons}
                          <span className="sr-only">{card.sr}</span>
                        </span>
                      </div>
                      <h1 className=" px-7 lg:px-5 text-white  dark:text-slate-800 font-semibold lg:font-semibold text-xl md:text-2xl lg:text-xl py-2">
                        {card.text}
                      </h1>
                    </div>
                  </Ripples>
                ))}
              </div>
            </section>
            <Table />
          </div>
        </Layout>
      )}
    </>
  );
}
