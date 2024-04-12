"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  department: string;
  join: string;
  salary: string;
  intro: string;
  dreams: string;
  email: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  const [show, setShow] = useState(false);
  const [data, setData] = useState<IForm | undefined>();

  // const onValid = (formData: IForm) => {
  //   setData(formData);
  //   setShow(true);
  //   reset();
  // };

  // const onInValid = (errors: string) => {
  //   console.log(errors);
  // };

  // const onClick = () => {
  //   setShow(false);
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        // onSubmit={handleSubmit(onValid, onInValid)}
        className="flex flex-col gap-4 px-4 py-1 border border-gray-300 rounded-lg shadow-md w-[500px] bg-cyan-100 border-r-4 border-b-4"
      >
        <h1 className="text-4xl font-bold text-center my-2">안뇽</h1>
        <div>
          <fieldset>
            <legend className="font-semibold">
              What department do you want to work for?
            </legend>
            <div>
              <input
                type="radio"
                id="departmentChoice1"
                value="Sales"
                {...register("department")}
              />
              <label className="ml-2" htmlFor="Sales">
                Sales
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="departmentChoice2"
                value="Marketing"
                {...register("department")}
              />
              <label className="ml-2" htmlFor="Marketing">
                Marketing
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="departmentChoice3"
                value="Accounting"
                {...register("department")}
              />
              <label className="ml-2" htmlFor="Accounting">
                Accounting
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="departmentChoice4"
                value="CustomerService"
                {...register("department")}
              />
              <label className="ml-2" htmlFor="CustomerService">
                Customer Service
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend className="font-semibold">
              why do you want to join this company?
            </legend>
            <div>
              <input
                type="radio"
                id="joinChoice1"
                value="Money"
                {...register("join")}
              />
              <label className="ml-2" htmlFor="Money">
                I want money!
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="joinChoice2"
                value="Company"
                {...register("join")}
              />
              <label className="ml-2" htmlFor="Company">
                I love this company
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="joinChoice3"
                value="learn"
                {...register("join")}
              />
              <label className="ml-2" htmlFor="learn">
                I want to learn
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="joinChoice4"
                value="know_why"
                {...register("join")}
              />
              <label className="ml-2" htmlFor="know_why">
                I dont know why
              </label>
            </div>
          </fieldset>
        </div>
        <button className="bg-yellow-300">Give me the job</button>
      </form>
    </div>
  );
}
