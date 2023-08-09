"use client";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import Ripples from "react-ripples";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import Container from "./section";
const schema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .max(20, "That's too long!"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(5, "It must be more than 5 characters"),
});

export default function Login() {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    route.push("/Dashboard");
    reset();
  };

  const Inputs = [
    { type: "text", placeholder: "Username", error: "name", icon: <BiUser /> },
    {
      type: "email",
      placeholder: "Email Address",
      error: "email",
      icon: <AiOutlineMail />,
    },
    {
      type: "password",
      placeholder: "Password",
      error: "password",
      icon: <MdLockOutline />,
    },
  ];
  return (
    <Container>
      <div className=" h-auto w-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex  flex-col items-center   bg-white  rounded-md w-[90%] md:w-[65%] sm:w-[70%] lg:w-[40%] py-5 px-3 h-[auto] shadow-lg mx-auto"
        >
          <Logo style={" text-6xl  pb-2 "} />
          <h1 className="  text-xl font-semibold px-5 text-center">
            Welcome back, Kindly login to your Sydmin account and continue.
          </h1>
          {Inputs.map((inputs, index) => (
            <div key={index} className=" w-[100%] mx-auto">
              <span className=" w-[100%] relative flex h-auto items-center my-2 rounded-md">
                <input
                  type={inputs.type}
                  {...register(inputs.error)}
                  placeholder={inputs.placeholder}
                  className=" border-[1px] placeholder:font-medium   placeholder:text-neutral-800 border-slate-900 outline-none mt-2 rounded-l-md  rounded-r-md bg-white shadow-lg pl-11 py-3 w-[100%]"
                />
                <div className=" absolute bg-slate-900 rounded-l-md top-2 text-white cursor-pointer py-[1rem]  px-3 text-lg">
                  {inputs.icon}
                </div>
              </span>
              <span className="text-red-600 text-sm  font-medium">
                {errors[inputs.error]?.message}
              </span>
            </div>
          ))}
          <div className=" w-full flex items-start">
            <Ripples className=" w-[170px] bg-slate-900  my-4  text-center rounded">
              <button
                type="submit"
                className=" font-medium w-[170px] cursor-default md:cursor-pointer flex text-lg py-3  px-4 justify-center items-center text-white "
              >
                Log in
              </button>
            </Ripples>
          </div>
        </form>
      </div>
    </Container>
  );
}
