"use client";
import React, { useState } from "react";
import Layout from "../Components/layout";
import { MdSaveAs } from "react-icons/md";
import { FaEdit, FaUser } from "react-icons/fa";

export default function Profile() {
  const storedUsername = localStorage.getItem("username");
  const defaultUsername = "User1234Vq";
  const [username, setUsername] = useState(storedUsername || defaultUsername);
  const [visible, setVisible] = useState(false);

  function handleEditUsername() {
    setVisible(!visible);
  }

  function handleSaveUsername() {
    localStorage.setItem("username", username);
    setVisible(false);
  }

  return (
    <Layout>
      <section className="h-screen w-full flex flex-col items-center">
        <h1 className="font-extrabold text-xl lg:text-4xl  text-white  dark:text-slate-900 text-center pt-20">
          My Profile
        </h1>
        <span className=" text-5xl bg-slate-400 p-6 my-5 rounded-full text-gray-700">
          <FaUser />
        </span>
        <div className="dark:bg-white bg-slate-800 lg:w-[50%] sm:w-[70%] md:w-[60%] w-[90%] flex flex-col items-center justify-center h-[300px] py-10 rounded-md my-3">
          <h1 className="dark:text-black text-white mb-3 text-lg  w-auto px-5 flex  items-center justify-center  font-[600]">
          {storedUsername ? username : defaultUsername}
          </h1>
          <div className="flex items-center my-2 gap-3">
            {visible && (
              <input
                type="text"
                autoComplete="off"
                autoFocus="true"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Edit your name.."
                className="bg-slate-50 py-2 px-5 border-[2px] border-gray-500 outline-none rounded-md text-gray-700"
              />
            )}
            <div>
              <button
                onClick={visible ? handleSaveUsername : handleEditUsername}
                className={`p-2 rounded-md ${
                  visible ? "border-black" : "border-gray-600"
                } cursor-default md:cursor-pointer active:scale-110 hover:bg-slate-100 border-[2px] flex items-center justify-center`}
              >
                {visible ? (
                  <span title="Save icons" className=" relative group text-green-400 text-2xl">
                    <MdSaveAs />
                    <span className=" sr-only">Save</span>
                    <span className=" absolute  bottom-[-39px] left-[-39px] group-active:visible dark:text-white dark:bg-gray-800 invisible bg-white rounded-md py-2 px-2 w-[150px] shadow-xl text-sm text-black">
                      Save Username
                      <span className=" absolute bg-white dark:bg-gray-800 h-2 w-2 left-[40%]  top-[-5px] rotate-[45deg]"></span>
                    </span>
                  </span>
                ) : (
                  <span className=" relative group text-red-400 text-2xl">
                    <FaEdit />
                    <span className=" sr-only">Edit</span>
                    <span className=" absolute top-[-25px] group-active:visible dark:text-white dark:bg-gray-800 invisible bg-white rounded-md py-2 px-2 w-[150px] shadow-xl text-sm text-black">
                      Edit Username
                      <span className=" absolute bg-white dark:bg-gray-800 h-2 w-2 left-1 bottom-[-3px] rotate-[45deg]"></span>
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
