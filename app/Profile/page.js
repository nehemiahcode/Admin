"use client";
import { useState, useEffect } from "react";
import Layout from "../Components/layout";
import { MdSaveAs } from "react-icons/md";
import { FaEdit, FaUser } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import Image from "next/image";

export default function Profile() {
  const [loadpage, setLoadPage] = useState(true);
  const [username, setUsername] = useState("User1234Vq");
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function handleEditUsername() {
    setVisible(!visible);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleUploadButtonClick = () => {
    document.getElementById("file-input").click();
  };

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
        <Layout>
          <section className="h-full w-full flex flex-col items-center">
            <h1 className="font-extrabold text-xl lg:text-4xl  text-white  dark:text-slate-900 text-center pt-20">
              My Profile
            </h1>
            <div className="relative w-[110px] h-[110px] mt-3 rounded-full flex items-center justify-center bg-slate-500">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Uploaded"
                  width={110}
                  height={110}
                  className=" rounded-full object-cover "
                />
              ) : (
                <span className=" text-5xl  rounded-full text-gray-700">
                  <FaUser />
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                id="file-input"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                title="Upload your profile Picture"
                onClick={handleUploadButtonClick}
                className=" absolute right-[5px] bottom-[-5px] active:scale-110 cursor-default md:cursor-pointer dark:text-white text-white text-xl flex items-center justify-center bg-gray-800 h-[40px] w-[40px] rounded-full"
              >
                <BsCamera />
                <span className=" sr-only">Upload Profile Picture</span>
              </button>
            </div>
            <div className=" py-5">
              <h1 className="dark:text-black text-white mb-3 text-lg  w-auto px-5 flex  items-center justify-center  font-[600]">
                {username}
              </h1>
            </div>
            <div className="dark:bg-white bg-slate-800 lg:w-[50%] mt-3 mb-5 sm:w-[70%] md:w-[60%] w-[90%] flex flex-col items-center justify-center h-[300px] py-10 rounded-md my-3">
              <h1 className="dark:text-black text-white mb-3 text-lg  w-auto px-5 flex  items-center justify-center  font-[500]">
                Create a unique username
              </h1>
              <div className="flex items-center justify-center my-2 gap-3 w-[100%]">
                {visible && (
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus="true"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Edit name.."
                    className="dark:bg-slate-50 bg-slate-300 py-2 shadow-xl px-5 border-[2px]  w-[70%] lg:w-[50%] border-gray-500 outline-none rounded-md text-gray-700"
                  />
                )}
                <div>
                  <button
                    onClick={handleEditUsername}
                    className={`p-2 rounded-md ${
                      visible ? "border-black" : "border-gray-600"
                    } cursor-default md:cursor-pointer active:scale-110 hover:bg-slate-100 border-[2px] flex items-center justify-center`}
                  >
                    {visible ? (
                      <span
                        title="Save icons"
                        className=" relative group text-green-600 text-2xl"
                      >
                        <MdSaveAs />
                        <span className=" sr-only">Save</span>
                        <span className=" absolute  bottom-[-49px] left-[-100px] group-active:visible dark:text-white dark:bg-gray-800 invisible bg-white rounded-md py-2 px-2 w-[150px] shadow-xl text-sm text-black">
                          Save Username
                          <span className=" absolute bg-white dark:bg-gray-800 h-2 w-2 right-[14px]  top-[-5px] rotate-[45deg]"></span>
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
            {/* <ImageUploader /> */}
          </section>
        </Layout>
      )}
    </>
  );
}
