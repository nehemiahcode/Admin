"use client";
import Layout from "../Components/layout";
import { FaUsers, FaUserCheck } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Barchart from "../Components/Barchart";
import { VscPreview } from "react-icons/vsc";
import Table from "../Components/Table";

export default function Dashboard() {
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

  return (
    <Layout>
      <div>
        <section className=" w-[100%] h-auto grid gap-5 px-5 lg:px-10 pt-24  md:px-16 grid-cols-1 lg:grid-cols-2 ">
          <div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-md  w-[100%] flex items-center justify-center shadow-xl h-[320px]">
            <Barchart />
          </div>
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {Cards.map((card, index) => (
              <div
                key={index}
                className="  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl flex flex-col justify-between  py-5 lg:py-3 px-3 h-[160px] lg:h-[150px] rounded-lg w-[100%]"
              >
                <div className=" flex items-center justify-between px-7 lg:px-5 gap-2">
                  <div className=" font-medium lg:font-semibold text-3xl text-white">
                    {card.numbers}
                  </div>
                  <span
                    title={card.sr}
                    className="bg-gray-900 p-3 shadow-lg rounded-full text-red-500 text-3xl lg:text-2xl"
                  >
                    {card.icons}
                    <span className="sr-only">{card.sr}</span>
                  </span>
                </div>
                <h1 className=" px-7 lg:px-5 text-white font-medium lg:font-semibold text-2xl lg:text-xl py-2">
                  {card.text}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <Table />
      </div>
    </Layout>
  );
}
