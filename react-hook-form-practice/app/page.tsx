"use client";

import { useForm } from "react-hook-form";
import CheckInput from "./components/check-input";
import CompanyInput from "./components/company-input";

export default function Home() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4 px-4 py-1 border border-gray-300 rounded-lg shadow-md w-[500px] bg-pink-100 border-r-4 border-b-4">
        <h1 className="text-4xl font-bold text-center my-2">직업 소개서</h1>

        <CheckInput />
        <CompanyInput />
        <button className="bg-yellow-400">Give me the job</button>
      </form>
    </div>
  );
}
