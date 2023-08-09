"use client";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const Links = [
    { url: "/Dashboard", text: "Dashboard" },
    { url: "/Profile", text: "Profile" },
    { url: "/Users", text: "Users" },
    { url: "/", text: "Log out" },
  ];
  const Terms = [
    { text: "Privacy Policy", url: "/Policy" },
    { text: "Terms", url: "/Terms" },
  ];
  return (
    <footer className=" w-full h-[auto] grid grid-cols-2 lg:grid-cols-3 dark:bg-white bg-slate-900 py-12 px-5 lg:px-16">
     
      <div>
        <h1 className=" text-lg font-medium dark:text-gray-500 dark:font-semibold text-white pb-2">Quick Links</h1>
        <ul className=" flex flex-col gap-2">
          {Links.map((link, index) => (
            <li key={index}>
              <Link prefetch={false}  href={link.url} className=" text-sm dark:text-cyan-800 text-cyan-400">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className=" text-lg font-medium dark:text-gray-500 dark:font-semibold text-white pb-2">Others</h1>
        <ul>
          {Terms.map((terms, index) => (
            <li key={index}>
              <Link prefetch={false}  href={terms.url} className=" text-sm py-2   dark:text-cyan-800 text-cyan-400">{terms.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="  border-l-2 dark:border-cyan-800 px-3  mt-10 lg:m-0">
      <div className=" flex  gap-3">
        <Logo style={" text-5xl"} />
        <h1 className=" text-lg font-semibold dark:text-gray-500  text-white">Sydmin</h1>
      </div>
      <p className=" dark:text-gray-500  text-gray-300 pt-2">All rights reserved</p>
      <p className=" dark:text-gray-500  text-gray-300 py-3">Developed by <Link title="Nehemiah | Portfolio" href={'https://codehubby.netlify.app'} className=" text-sm dark:text-cyan-800 text-cyan-400">Nehemiah</Link></p>
      </div>

    </footer>
  );
}
