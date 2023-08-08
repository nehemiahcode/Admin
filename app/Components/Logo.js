import { SiBaremetrics } from "react-icons/si";

export default function Logo({style}) {
  return (
    <span className={` ${style} text-blue-500`}>
      <SiBaremetrics />
    </span>
  );
}
