import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';

export function PartIn(){
    const {openModal} = useModal();
    // const openModalInstance = () => {
    //     window.scrollTo(0, 0);
    //     openModal();
    // }
    return(
        <div 
            className="flex flex-col items-start justify-center pt-24 px-24 h-[900px] bg-lined x:items-start x:text-left x:pt-8 x:justify-start x:h-full
            x:pl-4 x:pr-0"
        >
            <h1 
                className="text-8xl font-bold mb-3 x:text-5xl"
            >
                Как участвовать?
            </h1>
            <p 
                className="text-3xl mb-12 x:mb-4"
            >
                Вам нужно заполнить простую форму, зайти в каналы и ждать новостей
            </p>
            <div 
                className="flex flex-row gap-12 items-center mb-60 x:w-full x:gap-6 md:flex-col md:items-start"
            >
                <button 
                    className="py-6 px-11 bg-[#3773FF] text-[#FFFFFF] rounded-3xl text-5xl font-bold duration-300 
                    hover:rounded-[36px] hover:px-14 md:px-6 md:py-3 md:hover:px-8 md:text-4xl"
                    onClick={openModal}
                >
                    Участвовать
                </button>
                <div 
                    className="flex flex-row gap-3 x:items-center x:justify-center "
                >
                    <a href="https://t.me/tspkcup">
                        <FaTelegramPlane 
                            className="bg-[#D4E1FF] p-4 w-[100px] h-[100px] rounded-3xl cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90 
                                x:max-w-[424px] x:h-[100px] x:p-3 md:w-[75px] md:h-[75px]"
                        />
                    </a>
                    <a href="https://discord.gg/B4tpJBSzfH">
                        <FaDiscord 
                            className="bg-[#D4E1FF] p-4 w-[100px] h-[100px] rounded-3xl cursor-pointer duration-300 hover:text-[#3773FF] hover:rounded-full hover:scale-90 
                            x:max-w-[424px] x:h-[100px] x:p-3 x:w-full md:p-2 md:w-[75px] md:h-[75px]"
                        />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
