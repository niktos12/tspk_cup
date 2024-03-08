import { useModal } from "../context/ModalContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import data from "../data/data";
import { useCreateAccount } from "../lib/hooks";
import { ErrorResponse, ErrorTypesEnum, SuccessResponse } from "../lib/types";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import classNames from "classnames";
import { FaSpinner } from "react-icons/fa";

const tg = z
  .string()
  .min(1, { message: "Введите телеграм" })
  .refine((val) => val.startsWith("@"), {
    message: "Ваш телеграм должен начинаться с '@'",
  })
  .refine((value) => /^@[A-Za-z0-9]+$/u.test(value), {
    message: "Телеграм должен содержать только английские буквы или цифры",
  });
const fName = z
  .string()
  .min(1, { message: "Введите имя" })
  .refine((value) => /^[А-Яа-яёЁ]+(-[А-Яа-яёЁ]+)?$/u.test(value), {
    message: "Имя должно содержать только буквы кириллицы",
  });
const lName = z
  .string()
  .min(1, { message: "Введите фамилию" })
  .refine((value) => /^[А-Яа-яёЁ]+(-[А-Яа-яёЁ]+)?$/u.test(value), {
    message: "Фамилия должна содержать только буквы кириллицы",
  });
const nameTeam = z
  .string()
  .min(1, { message: "Введите название команды" })
  .refine((value) => /^[A-Za-z0-9]+$/u.test(value), {
    message: "Название команды должно содержать только латинские буквы и цифры",
  });
const email = z
  .string()
  .min(1, { message: "Введите почту" })
  .email({ message: "Неверная почта" });
const collegeGroup = z.string().min(1, { message: "Выберите группу" });

const formSchema = z.object({
  firstName: fName,
  lastName: lName,
  telegram: tg,
  email: email,
  collegeGroup: collegeGroup,
  nameTeam: nameTeam,
});
export type ModalFormData = z.infer<typeof formSchema>;

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModalFormData>({
    resolver: zodResolver(formSchema),
  });
  const { isOpen, closeModal } = useModal();
  const mutation = useCreateAccount(onSuccess, onError);

  function onSuccess(response: AxiosResponse<SuccessResponse, any>) {
    toast.success(response.data.message, { duration: 2000 });
    closeModal();
    reset();
  }

  function onError(error: AxiosError<ErrorResponse, any>) {
    let errorResponse = error.response?.data;
    if (errorResponse) {
      for (let errorType of Object.values(ErrorTypesEnum)) {
        errorResponse[errorType] &&
          toast.error(errorResponse[errorType] || "", { duration: 2000 });
      }
    }
  }

  const onSubmit = (data: ModalFormData) => {
    mutation.mutate(data);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="z-30">
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#FFFFFF] opacity-60 backdrop-blur-2xl"
          onClick={closeModal}
        ></div>
        <form
          className="p-12 top-4 left-1/2 -translate-x-1/2 bg-white-transparent fixed z-40 bg-[#0D0D0E]/12
       flex flex-col gap-8 rounded-[64px] backdrop-blur-2xl transition-transform duration-300 border-[#0D0D0E] border solid xm:gap-4 xm:p-6 xs:scale-90 xs:top-5
       xss:scale-[80%] megax:scale-[74%] fx:scale-[73%] xm:rounded-[24px] f:scale-[72%] fx:scale-[71%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-4xl text-center mb-2 text-[#3773FF]">
              Форма на участие
            </h1>
            <IoCloseCircleOutline
              onClick={closeModal}
              className="cursor-pointer text-[#3773FF] w-[39px] h-[39px] hover:text-[#0D0D0E] duration-300"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[48%]">
              <input
                {...register("firstName")}
                placeholder="Имя"
                className="border-b-2 border-black p-6 pb-1 pl-1 bg-transparent text-[#3773FF] font-black flex flex-col placeholder:text-[#3773FF]"
              />
              {errors.firstName && (
                <p className="text-red-500 ">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex flex-col w-[48%]">
              <input
                {...register("lastName")}
                placeholder="Фамилия"
                className={`border-b-2 border-black p-6 pb-1 pl-1 bg-transparent text-[#3773FF] font-black placeholder:text-[#3773FF]`}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-8 xm:gap-4">
            <div className="flex flex-col">
              <p className="">Ваш телеграм</p>
              <input
                {...register("telegram")}
                placeholder="@TSPKCup"
                className="border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black placeholder:text-[#3773FF]"
              />
              {errors.telegram && (
                <p className="text-red-500">{errors.telegram.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <p className="">Ваша почта</p>
              <input
                {...register("email")}
                className="border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black placeholder:text-[#3773FF]"
                placeholder="TSPKCup@mail.ru"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="xm:flex xm:flex-row xm:items-start xm:justify-between">
              <div className="flex flex-col xm:w-[40%]">
                <p className="xm:mt-[2px]">Группа</p>
                <select
                  {...register("collegeGroup")}
                  size={1}
                  className="border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black xm:w-[100%]"
                >
                  {errors.collegeGroup && (
                    <p className="text-red-500">
                      {errors.collegeGroup.message}
                    </p>
                  )}
                  {data.map((item, id) => (
                    <option
                      key={id}
                      value={item.group}
                      className="focus:bg-[#3773FF] focus:text-[#FFFFFF] checked:bg-[#3773FF] checked:text-[#FFFFFF] text-[#3773FF] font-black hover:bg-[#3773FF] hover:text-[#3773FF] cursor-pointer"
                    >
                      {item.group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col ">
                <p className="mt-5 xm:mt-0">Команда</p>
                <input
                  {...register("nameTeam")}
                  placeholder="NE DOGONYAT"
                  className="border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black placeholder:text-[#3773FF]"
                />
                {errors.nameTeam && (
                  <p className="text-red-500">{errors.nameTeam.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <button
                className={classNames(
                  "py-4 px-6 bg-[#3773FF] text-[#FFFFFF] rounded-3xl text-3xl font-black xm:py-2 xm:px-3 xm:rounded-[12px]",
                  { "text-slate-400": mutation.isPending }
                )}
              >
                {mutation.isPending ? (
                  <span className="flex flex-row justify-center text-center">
                    Загрузка <FaSpinner className="ml-4" />
                  </span>
                ) : (
                  <span>Отправить</span>
                )}
              </button>
              <p className="xm:text-sm text-[#3773FF]">
                Нажимая "Отправить", вы принимаете политику хранения и обработки{" "}
                <a
                  href="https://piybeep.com/privacy_policy.pdf"
                  className="underline"
                >
                  персональных данных
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Modal;
