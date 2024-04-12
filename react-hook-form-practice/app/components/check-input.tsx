import { useForm } from "react-hook-form";

export default function CheckInput() {
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
            What department do you want to work for?
          </h1>
          <div>
            <input
              type="checkbox"
              id="Sales"
              value="Sales"
              {...register("department")}
              onChange={() => handleOnChange("Sales")}
              checked={selectedDepartment === "Sales"}
            />
            <label className="ml-2" htmlFor="Sales">
              Sales
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Marketing"
              value="Marketing"
              {...register("department")}
              onChange={() => handleOnChange("Marketing")}
              checked={selectedDepartment === "Marketing"}
            />
            <label className="ml-2" htmlFor="Marketing">
              Marketing
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Accounting"
              value="Accounting"
              {...register("department")}
              onChange={() => handleOnChange("Accounting")}
              checked={selectedDepartment === "Accounting"}
            />
            <label className="ml-2" htmlFor="Accounting">
              Accounting
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="CustomerService"
              value="CustomerService"
              {...register("department")}
              onChange={() => handleOnChange("CustomerService")}
              checked={selectedDepartment === "CustomerService"}
            />
            <label className="ml-2" htmlFor="CustomerService">
              Customer Service
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
