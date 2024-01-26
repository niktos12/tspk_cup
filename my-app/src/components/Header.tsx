import {Navigation} from "./Navigation"
import { useState } from 'react';

export function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

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
                <Navigation />
            </div>
        </header>
    )
}