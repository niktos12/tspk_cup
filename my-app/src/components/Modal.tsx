import React, { useState } from 'react'
import { useModal } from '../context/ModalContext';
import { IoCloseCircleOutline } from "react-icons/io5";


export function Modal () {
  const { isOpen, closeModal } = useModal();
  if(!isOpen) return null;
  

  return (
    <>
      <div className='z-30 absolute fixed top-0 right-0 left-0 bottom-0'>
      <form
        className="p-12 rounded absolute top-1/6 left-1/2 -translate-x-1/2 
        translate-y-1/2 flex flex-col gap-8 rounded-[64px] backdrop-blur-xl"
        onSubmit={closeModal}
      >
        <div className='flex flex-row items-center justify-between'>
          <h1 className="text-4xl text-center mb-2 text-[#3773FF]">Форма на участие</h1>
          <IoCloseCircleOutline onClick={closeModal} className='cursor-pointer text-[#3773FF] w-[39px] h-[39px] hover:text-[#0D0D0E] duration-300'/>
        </div>
        <div className='flex flex-row justify-between'>
          <input placeholder='Имя' className='border-b-2 border-black p-6 pb-1 pl-1 bg-transparent w-[48%] text-[#3773FF] font-black'/>
          <input placeholder='Фамилия' className='border-b-2 border-black p-6 pb-1 pl-1 bg-transparent w-[48%] text-[#3773FF] font-black'/>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col'>
            <p className=''>Ваш телеграм</p>
            <input placeholder='@TSPKCup' className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'/>
          </div>
          <div className='flex flex-col'>
            <p className=''>Группа</p>
            <input placeholder='ИСиП-11' className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'/>
          </div>
          <div className='flex flex-col'>
            <p className=''>Команда</p>
            <input placeholder='NE DOGONYAT' className='border-b-2 border-black p-6 py-1 pl-1 bg-transparent text-[#3773FF] font-black'/>
          </div>
          <div className='flex flex-col'>
            <button className='py-4 px-6 bg-[#3773FF] text-[#FFFFFF] rounded-3xl text-3xl font-black'>Отправить</button>
            <p className=''>Нажимая "Отправить", вы принимаете политику хранения и обработки <a href='https://piybeep.com/privacy_policy.pdf'>персональных данных</a></p>
          </div>
           
        </div>
        
      </form>
      </div>
    </>
  )
}
