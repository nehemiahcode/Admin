"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import Ripples from "react-ripples";

export default function Themeswitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Ripples>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 dark:bg-slate-800 dark dark:ring-cyan-400 focus:ring-2 ring-white ring-inset py-2 text-xl px-3 rounded-md"
      >
        {theme === "dark" ? (
          <span>
            <IoIosSunny />
            <span className=" sr-only">Dark Theme</span>
          </span>
        ) : (
          <span>
            <PiMoonLight />
            <span className=" sr-only">Light Theme</span>
          </span>
        )}
      </button>
    </Ripples>
  );
}
