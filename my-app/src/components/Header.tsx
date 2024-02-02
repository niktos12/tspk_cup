import {  useEffect, useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Toaster } from 'react-hot-toast';


export function Header() {
    const [show,setShow] = useState(false)
    const {openModal} = useModal();
    const [scrolled, setScrolled] = useState<'scrolled' | 'notScrolled'>('notScrolled');
    const [smallWidth, setSmallWidth] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0 ? 'scrolled' : 'notScrolled');
        };
        const handleSmallWidth = () => {
            setSmallWidth(window.innerWidth < 1080);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleSmallWidth);

        handleScroll()
        handleSmallWidth()
        
    });
    const handleShowModal = () => {
        handleShow()
        openModal()
    }

    const handleShow = () => {
        setShow(!show)
    }


    return(
        <header 
            className="w-full pt-12 flex items-center justify-center flex-row z-20 top-0 sticky x:pt-0 x:flex-col"
            
        >
            <div 
                className="w-[85%] rounded-[64px] gap-12 flex flex-row items-center 
                justify-between p-12 backdrop-blur-md custom-header-bg x:bg-white x:backdrop-blur-0 x:w-full x:rounded-[0px] x:duration-500"
                style={{backgroundColor: scrolled === 'scrolled' && smallWidth ? '#D4E1FF ' : 'transparent'}}
            >
                <Toaster position='top-center'/>
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
            {show && 
            <div className='w-full h-full items-end flex flex-col z-30 absolute bg-[#D4E1FF] top-0 rounded-b-3xl'>
                <div className='w-full h-full items-end flex flex-col z-30 absolute bg-[#D4E1FF] top-0 p-4 rounded-b-3xl '>
                <IoCloseCircleOutline
                    onClick={handleShow}
                    className='cursor-pointer text-[#3773FF] w-[45px] h-[45px] hover:text-[#0D0D0E] duration-300'
                />
                <a 
                    className='text-2xl font-semibold text-[#0D0D0E]' 
                    href='#lists' 
                    onClick={handleShow}
                >
                    О турнире
                </a>
                <a 
                    className='text-2xl font-semibold text-[#0D0D0E]'
                    onClick={handleShowModal} 
                >
                    Участвовать
                </a>
                <div className='flex flex-row gap-3'>
                    <FaTelegramPlane className='bg-white rounded-2xl w-[37px] h-[37px] p-1 hover:text-[#3773FF] duration-300 hover:rounded-full hover:scale-90'/>
                    <FaDiscord className='bg-white rounded-2xl w-[37px] h-[37px] p-1 hover:text-[#3773FF] duration-300 hover:rounded-full hover:scale-90'/>
                </div>
                </div>
            </div>}
        </header>
    )
}