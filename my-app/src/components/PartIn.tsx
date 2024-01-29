import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';

export function PartIn(){
    const {openModal} = useModal();
    
    return(
        <div 
            className="flex flex-col items-start justify-center pt-24 px-24 h-[900px] bg-lined"
        >
            <h1 
                className="text-8xl font-bold mb-3"
            >
                Как участвовать?
            </h1>
            <p 
                className="text-3xl mb-12"
            >
                Вам нужно заполнить простую форму, зайти в каналы и ждать новостей
            </p>
            <div 
                className="flex flex-row gap-12 items-center mb-60"
            >
                <button 
                    className="py-6 px-11 bg-[#3773FF] text-[#FFFFFF] rounded-3xl text-5xl font-bold duration-300 hover:rounded-[36px] hover:px-14"
                    onClick={openModal}
                >
                    Участвовать
                </button>
                <div 
                    className="flex flex-row gap-3"
                >
                    <FaTelegramPlane 
                        className="bg-[#D4E1FF] p-4 w-[100px] h-[100px] rounded-3xl cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90"
                    />
                    <FaDiscord 
                        className="bg-[#D4E1FF] p-4 w-[100px] h-[100px] rounded-3xl cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90"
                    />
                </div>
            </div>
        </div>
    )
}