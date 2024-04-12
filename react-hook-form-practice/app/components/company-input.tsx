import { useForm } from "react-hook-form";

export default function CompanyInput() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const selectedDepartment = watch("department");

  const handleOnChange = (value: any) => {
    setValue("department", value); // 선택된 부서로 값을 설정합니다.
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOnChange)}>
        <div>
          <h1 className="font-semibold">
            why do you want to join this company?
          </h1>
          <div>
            <input
              type="checkbox"
              id="money"
              value="Money"
              {...register("department")}
              onChange={() => handleOnChange("Money")}
              checked={selectedDepartment === "Money"}
            />
            <label className="ml-2" htmlFor="Money">
              I want money!
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="company"
              value="Company"
              {...register("department")}
              onChange={() => handleOnChange("Company")}
              checked={selectedDepartment === "Company"}
            />
            <label className="ml-2" htmlFor="Company">
              I love this company
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="learn"
              value="learn"
              {...register("department")}
              onChange={() => handleOnChange("learn")}
              checked={selectedDepartment === "learn"}
            />
            <label className="ml-2" htmlFor="learn">
              I want to learn
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="know_why"
              value="know_why"
              {...register("department")}
              onChange={() => handleOnChange("know_why")}
              checked={selectedDepartment === "know_why"}
            />
            <label className="ml-2" htmlFor="know_why">
              I dont know why
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
