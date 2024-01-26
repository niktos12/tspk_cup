import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";




export function Navigation() {

    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return(
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
                onClick={handleClick}
                className="ml-6 px-6 py-3 text-2xl font-semibold bg-[#3773FF] text-white rounded-2xl"
            >
                Участвовать
            </button>
            <Modal isOpen={true} onClose={handleClick}/>
        </div>
    )
}