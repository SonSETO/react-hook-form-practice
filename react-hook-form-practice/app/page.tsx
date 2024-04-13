"use client";

import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface IFormname {
  department: string;
  join: string;
  salary: string;
  intro: string;
  dreams: string;
  email: string;
}

//부서, 컴퍼니, 샐러리, 인트로, 드림스, 이메일 등 타입선언

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormname>({ mode: "onChange" });
  //인석세스풀을 써볼까 했지만 일단 킵

  const [submitted, setSubmitted] = useState(false);
  // 서브밋 여부 상태 useState

  const onValid = (data: IFormname) => {
    console.log(data);
    setSubmitted(true);
    // 서브밋이 완료됨을 설정

    reset();
    // 폼 리셋
  };

  const onInValid = (errors: FieldErrors<IFormname>) => {
    console.log(errors);
  };

  // const onInValid = (errors: Record<string, any>) => {
  //   console.log(errors);
  // };
  // gpt에 도움을 받아 일단 any로 진행을 함 인터페이스에 errors를 선언해도 해당 문제가 발생

  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <form
        onSubmit={handleSubmit(onValid, onInValid)}
        // onValid, onInValid에 data:IFormname을 하면 onValid에 에러가 발생이 된다. 속성이 없고 형식이 호환되지 않는다 뜨지만 일단 제대로된 원인과 해결 방안을 모르니
        // 마음에 들지 않지만 data: any로 선언 아무런 문제없이 진행이 되지만 애니는 쓰기가 싫다. 조언을 받아 해결방안을 찾아보자.
        //seForm 의 제네릭타입에 들어가는 타입과 onValid의 인자에 들어가는 타입이 동일하거나 집합수준이 더 커야하나?! 최종적으로 받을 데이터 타입값으로 넣넣?
        // 담님 도움으로 errors는 FieldErrors로 해결 근데 왜 Field 이름 찾을 수 없다고 빨간 밑줄이 왜 생기는지 이유는 정말 모르겠음 => 해결 vscode재시작 하니 사라짐

        className="flex flex-col gap-4 px-4 py-1 border border-gray-300 rounded-lg shadow-md w-[500px] bg-cyan-100 border-r-4 border-b-4"
      >
        <h1 className="text-4xl font-bold text-center my-2">안뇽</h1>
        <div>
          {/* department 시작 */}
          <fieldset>
            <legend className="font-semibold">
              What department do you want to work for?
            </legend>
            <div>
              <input
                type="radio"
                id="departmentChoice1"
                value="Sales"
                {...register("department", { required: true })}
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
                {...register("department", { required: true })}
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
                {...register("department", { required: true })}
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
                {...register("department", { required: true })}
              />
              <label className="ml-2" htmlFor="CustomerService">
                Customer Service
              </label>
            </div>
            {errors.department && (
              <span className="text-red-500">부서를 선택하세요.</span>
            )}
          </fieldset>
          {/* department 종료 */}
        </div>
        <div>
          {/*Join Company 시작 */}
          <fieldset>
            <legend className="font-semibold">
              why do you want to join this company?
            </legend>
            <div>
              <input
                type="radio"
                id="joinChoice1"
                value="Money"
                {...register("join", { required: true })}
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
                {...register("join", { required: true })}
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
                {...register("join", { required: true })}
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
                {...register("join", { required: true })}
              />
              <label className="ml-2" htmlFor="know_why">
                I dont know why
              </label>
            </div>
            {errors.join && (
              <span className="text-red-500">연봉을 선택하세요.</span>
            )}
          </fieldset>
          {/*Join Company 종료 */}
          {/*Salary 시작 */}
          <fieldset>
            <legend className="font-semibold">Salary</legend>
            <div>
              <select
                className="mb-1  w-full border-[2px] border-black rounded-[10px] "
                id="salary"
                {...register("salary")}
              >
                <option value="50K">$50K</option>
                <option value="100K">$100K</option>
                <option value="150K">$150K</option>
                <option value="200K">$200K</option>
              </select>
            </div>
          </fieldset>
          {/*Salary 종료 */}
          {/*Introduce 시작 */}
          <fieldset>
            <legend className="font-semibold">Introduce yourself</legend>
            <div>
              <input
                className=" w-full border-[2px] border-black rounded-[10px] "
                type="text"
                id="intro"
                {...register("intro", {
                  required: "부족해~~",
                  minLength: {
                    value: 5,
                    message: "하다 부족 소개 너.",
                  },
                })}
              />
              {errors.intro ? (
                <span className="text-red-500">{errors.intro.message}</span>
              ) : null}
            </div>
          </fieldset>
          {/*Introduce 종료 */}
          {/*Tell dreams 시작 */}
          <fieldset>
            <legend className="font-semibold">
              Tell us what your dreams are
            </legend>
            <div>
              <input
                className="w-full h-[100px] border-[2px] border-black rounded-[10px] "
                type="text"
                id="dreams"
                {...register("dreams", {
                  required: "ㅋㅋ 진짜?",
                  minLength: {
                    value: 10,
                    message: "작다 너의 꿈 작성 한다 다시.",
                  },
                })}
              />
              {errors.dreams ? (
                <span className="text-red-500">{errors.dreams.message}</span>
              ) : null}
            </div>
          </fieldset>
          {/*Tell dreams 종료 */}
          {/* 갓대훈 */}
          <fieldset>
            <legend className="font-semibold">Email</legend>
            <div>
              <input
                className="w-full border-[2px] border-black rounded-[10px] "
                type="email"
                id="email"
                {...register("email", {
                  required: "힌트 : 갓대훈",
                  validate: {
                    useNaver: (value) =>
                      value.includes("naver.com") || "@갓대훈만 가능",
                  },
                })}
              />
              {errors.email ? (
                <span className="text-red-500">{errors.email.message}</span>
              ) : null}
            </div>
          </fieldset>
          {/* 갓대훈에게 종료란 없다 */}
        </div>
        <button type="submit" className="bg-yellow-300">
          Give me the job
        </button>
        {submitted && (
          <p className="text-green-600 mt-4"> 제출이 완료되었습니다.</p>
        )}
      </form>
    </div>
  );
}
