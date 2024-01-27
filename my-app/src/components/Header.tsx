import {  useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { Modal } from './Modal';
import { useModal } from '../context/ModalContext';


export function Header() {

    const {openModal} = useModal();


    return(
        <header 
            className="w-full p-12 flex items-center justify-center flex-row absolute z-20 top-0"
        >
            <div 
                className="w-[75%] rounded-[64px] gap-12 flex flex-row items-center 
                justify-between p-12 backdrop-blur-md custom-header-bg"
            >
                <img 
                    src={process.env.PUBLIC_URL + "/images/Logo.svg"} 
                    alt="" 
                    className="bg-[#D4E1FF] p-3 rounded-[16px] cursor-pointer"
                />
                

    <div 
        className="flex gap-6 flex-row items-center"
    >
        <a 
            href="" 
            className="px-6 py-3 flex items-center bg-[#D4E1FE] text-2xl font-semibold rounded-2xl text-[#0D0D0E]"
        >
            О турнире
        </a>
        <FaTelegramPlane 
            className="text-[#0D0D0E] p-2 w-[52px] h-[52px] rounded-2xl bg-[#D4E1FF] cursor-pointer"
        />
        <FaDiscord 
            className="text-[#0D0D0E] p-2 w-[52px] h-[52px] rounded-2xl bg-[#D4E1FF] cursor-pointer"
        />
        <button
            onClick={openModal}
            className="ml-6 px-6 py-3 text-2xl font-semibold bg-[#3773FF] text-white rounded-2xl"
        >
            Участвовать
        </button>
        
    </div>

            </div>
        </header>
    )
}