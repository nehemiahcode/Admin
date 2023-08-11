"use client"
import Layout from "../Components/layout";
import Table from "../Components/Table";
import { useEffect, useState } from "react";
export default function Users() {
  const [loadpage, setLoadPage] = useState(true);

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
          <Table />
        </Layout>
      )}
    </>
  );
}
