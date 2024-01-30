import {  useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';
import { IoMenuOutline } from "react-icons/io5";


export function Header() {
    const [show,setShow] = useState(false)
    const {openModal} = useModal();

    const handleShow = () => {
        setShow(!show)
    }


    return(
        <header 
            className="w-full pt-12 flex items-center justify-center flex-row z-20 top-0 sticky x:pt-0"
        >
            <div 
                className="w-[85%] rounded-[64px] gap-12 flex flex-row items-center 
                justify-between p-12 backdrop-blur-md custom-header-bg x:bg-white x:backdrop-blur-0 x:w-full x:rounded-[0px]"
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
                        href="#lists" 
                        className="px-6 py-3 flex items-center bg-[#D4E1FE] text-2xl font-semibold rounded-2xl text-[#0D0D0E] duration-300 hover:rounded-3xl h-[67px] x:hidden"
                    >
                        О турнире
                    </a>
                    <FaTelegramPlane 
                        className="text-[#0D0D0E] p-3 w-[67px] h-[67px] rounded-2xl 
                        bg-[#D4E1FF] cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90 x:hidden"
                    />
                    <FaDiscord 
                        className="text-[#0D0D0E] p-3 w-[67px] h-[67px] rounded-2xl 
                        bg-[#D4E1FF] cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90 x:hidden"
                    />
                    <button
                        onClick={openModal}
                        className="ml-6 px-6 py-3 text-2xl font-semibold bg-[#3773FF] text-white rounded-2xl duration-300 hover:rounded-3xl h-[67px] x:hidden"
                    >
                        Участвовать
                    </button>
                    <IoMenuOutline 
                        className='hidden x:flex w-[48px] h-[48px] bg-[#3773FF] text-white rounded-xl'
                        onClick={handleShow}
                    />
                </div>
            </div>
        </header>
    )
}