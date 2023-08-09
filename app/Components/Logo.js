import { SiBaremetrics } from "react-icons/si";

export default function Logo({style}) {
  return (
    <span className={` ${style} dark:text-slate-800 text-blue-500`}>
      <SiBaremetrics />
    </span>
  );
}
