"use client";
import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Datas from "./Data.json";
import Ripples from "react-ripples";
import { BiSearch } from "react-icons/bi";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { PiPlanet } from "react-icons/pi";

export default function Table() {
  const data = useMemo(() => Datas, []);
  const [filtering, setFiltering] = useState("");

  const columns = [
    {
      header: "S/N",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "First name ",
      accessorKey: "first_name",
      footer: "First name",
    },
    {
      header: "Last name",
      accessorKey: "last_name",
      footer: "Last name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Genders",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
      // cell:info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
    },
  ];
  const tables = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 w-full py-10 md:px-16  px-5 lg:px-10">
        <div>
          <span className=" relative">
            <input
              type="text"
              placeholder="Search..."
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              className=" bg-gray-200 my-2 outline-none px-6 py-2 w-[250px] rounded-md"
            />
            <span className=" absolute left-0 text-xl pl-1 top-[0.04rem] text-gray-500">
              <BiSearch />
            </span>
          </span>
          <div className="w-[100%] mx-auto">
            <div className="w-[100%]">
              <div className="overflow-x-auto  w-[100%]">
                <div className="shadow overflow-x-auto border-b h-[400px] lg:h-[450px]  border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y  rounded-md divide-gray-200">
                    <thead className="bg-gray-50">
                      {tables.getHeaderGroups().map((headergroup) => (
                        <tr key={headergroup.id}>
                          {headergroup.headers.map((header) => (
                            <th
                              key={header.id}
                              className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider"
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tables.getRowModel().rows.map((row, index) => (
                        <tr
                          key={row.id}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-200"
                          } hover:bg-gray-100`}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className=" flex ite gap-5 py-4">
                  <Ripples className=" rounded-full">
                    <button
                      onClick={() => tables.setPageIndex(0)}
                      className={` ${
                        tables.getCanPreviousPage()
                          ? "bg-sky-500"
                          : "bg-red-500"
                      } rounded-full p-2 flex items-center justify-center   active:scale-110 text-2xl h-[50px] w-[50px] text-white`}
                    >
                      <MdKeyboardDoubleArrowLeft />
                      <span className=" sr-only">prev</span>
                    </button>
                  </Ripples>
                  <Ripples className=" rounded-full">
                    <button
                      disabled={!tables.getCanNextPage()}
                      onClick={() => tables.nextPage()}
                      className={`rounded-full ${
                        tables.getCanNextPage() && "bg-red-500"
                      }  p-2 bg-sky-500 h-[50px] active:scale-110 flex items-center justify-center w-[50px] text-2xl text-white `}
                    >
                      <MdKeyboardDoubleArrowRight />
                      <span className="sr-only">next</span>
                    </button>
                  </Ripples>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[100%] flex items-center justify-center mt-7 lg:m-0 h-auto">
          <div className=" bg-slate-900 rounded-md h-[auto] w-[90%] flex flex-col gap-5 py-3 justify-between">
            <span className="  w-full flex items-center justify-center text-cyan-600 text-8xl">
              <PiPlanet />
            </span>
            <div className=" bg-slate-200 rounded-lg shadow-md w-[80%] px-3 py-2 flex flex-col justify-center items-center h-[auto] mx-auto">
              <h1 className=" text-center font-semibold px-6 py-3 text-xl">
                Become one of us today and join over{" "}
                <span className=" font-bold text-cyan-600 text-xl">200k</span>{" "}
                others to be an admin.
              </h1>
              <p className=" text-md text-center px-3 font-medium tracking-wider text-gray-600">
                Kindly click on the button below to get started.
              </p>
              <Ripples className=" my-3">
                <button className=" py-3 px-3 bg-slate-800 w-[160px] text-white text-center rounded-md">
                  Start
                </button>
              </Ripples>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
