import { useModal } from '../context/ModalContext';
import { IoCloseCircleOutline } from "react-icons/io5";
import { z } from 'zod';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import data from '../data/data';
import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const tg = z.string().refine((val) => val.startsWith('@'), {
  message: "Ваш телеграм должен начинаться с '@'"
});

  
  

  const formSchema = z.object({
    firstName: z.string().min(1, { message: "Введите имя" }),
    lastName: z.string().min(1, { message: "Введите фамилию" }),
    telegram: tg,
    email: z.string().min(1, { message: "Введите почту" }).email({ message: "Неверная почта" }),
    group: z.string().min(1, { message: "Выберите группу" }),
    nameTeam: z.string().min(1, { message: "Введите название команды" })
  })
  type FormData = z.infer<typeof formSchema>

const Modal = () => {
const [selected, setSelected] = useState('ОИС-11')

  const handleSelect = useCallback((value: string) => setSelected(value), []);
  const options = data.map((item) => ({ value: item.group, label: item.id }));

  const { isOpen, closeModal } = useModal();

  const { register, handleSubmit, formState: { errors } ,reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    closeModal()
    reset()
  }

  if(!isOpen) return null;

  return (
    <>
      <div 
        className='z-30 absolute fixed top-0 right-0 left-0 bottom-0'
      >
      <form

        className="p-12 rounded top-0 left-1/2 -translate-x-1/2 bg-white-transparent fixed 
        translate-y-1/3 flex flex-col gap-8 rounded-[64px] backdrop-blur-xl transition-transform duration-300 border-[#0D0D0E] border solid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div 
          className='flex flex-row items-center justify-between'
        >
          <h1 
            className="text-4xl text-center mb-2 text-[#3773FF]"
          >
            Форма на участие
          </h1>
          <IoCloseCircleOutline 
            onClick={closeModal} 
            className='cursor-pointer text-[#3773FF] w-[39px] h-[39px] hover:text-[#0D0D0E] duration-300'
          />
        </div>
        <div 
          className='flex flex-row justify-between'
        >
          <div className='flex flex-col w-[48%]'>
            <input {...register('firstName')} 
            placeholder='Имя' 
            className='border-b-2 border-black p-6 pb-1 pl-1 bg-transparent text-[#3773FF] font-black flex flex-col'
          />{errors.firstName && <p className='text-red-500 '>{errors.firstName.message}</p>}
          </div>
          <div className='flex flex-col w-[48%]'>
            <input {...register('lastName')} 
            placeholder='Фамилия'
            className={`border-b-2 border-black p-6 pb-1 pl-1 bg-transparent text-[#3773FF] font-black ${errors.lastName ? 'text-red-500' : ''}`}
          />{errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
          </div>
          
          
        </div>
        <div 
          className='flex flex-col gap-8'
        >
          <div 
            className='flex flex-col'
          >
            <p 
              className=''
            >
              Ваш телеграм
            </p>
            <input {...register('telegram')}
              placeholder='@TSPKCup' 
              className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'
            />{errors.telegram && <p className='text-red-500'>{errors.telegram.message}</p>}
          </div>
          <div className='flex flex-col'>
            <p 
              className=''
            >
              Ваша почта
            </p>
            <input {...register('email')}
              className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black' 
              placeholder='TSPKCup@mail.ru'/>{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div 
            className='flex flex-col'
          >
            <p 
              className=''
            >
              Группа (выберите вашу группу)
            </p>
           

            
            <select {...register('group')}

              className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'
              
            >{errors.group && <p className='text-red-500'>{errors.group.message}</p>}
            {data.map((item,id) => (
              <option key={id} value={item.group} className=''>{item.group}</option>
            ))}
            </select>
          </div>
          <div 
            className='flex flex-col'
          >
            <p 
              className=''
            >
              Команда
            </p>
            <input {...register('nameTeam')} 
              placeholder='NE DOGONYAT' 
              className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'
            />{errors.nameTeam && <p className='text-red-500'>{errors.nameTeam.message}</p>}
          </div>
          <div 
            className='flex flex-col'
          >
            <button 
              className='py-4 px-6 bg-[#3773FF] text-[#FFFFFF] rounded-3xl text-3xl font-black'
            >
              Отправить
            </button>
            <p 
              className=''
            >
              Нажимая "Отправить", вы принимаете политику хранения и обработки <a 
                href='https://piybeep.com/privacy_policy.pdf'
                className='underline'
              >
                 персональных данных
              </a>
            </p>
          </div>
        </div>
      </form>
      </div>
    </>
  )
}
export default Modal
