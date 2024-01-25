import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

export function Footer(){
    return(
            <div className="flex flex-row justify-between items-center bg-[#D4E1FF] py-6 px-24 mt-28">
                <p className="text-[#1F1F25] font-medium">
                    <span className="font-extrabold">ТСПК</span>
                    Cup
                </p>
                <div className="gap-6 flex flex-row items-center ">
                    <a href="" className="underline">Политика кондифициальности</a>
                    <p>2024 ©️ Разработали и продвигаем сами</p>
                    <div className="flex flex-row gap-3">
                        <FaTelegramPlane 
                            className="text-[#0D0D0E] p-2 w-[42px] h-[42px] rounded-2xl bg-[#D4E1FF] 
                            cursor-pointer bg-[#FFFFFF] drop-shadow-[0_0_14px_#ffffff]"
                        />
                        <FaDiscord 
                            className="text-[#0D0D0E] p-2 w-[42px] h-[42px] rounded-2xl bg-[#D4E1FF] 
                            cursor-pointer bg-[#FFFFFF] drop-shadow-[0_0_14px_#ffffff]"
                        />
                        <SiNotion 
                            className="text-[#0D0D0E] p-2 w-[42px] h-[42px] rounded-2xl bg-[#D4E1FF] 
                            cursor-pointer bg-[#FFFFFF] drop-shadow-[0_0_14px_#ffffff]"
                        />
                    </div>
                </div>
        </div>
    )
}