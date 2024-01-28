import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export function Footer(){
    return(
            <div 
                className="flex flex-row justify-between items-center bg-[#D4E1FF] py-6 px-24 mt-28"
            >
                <p className="text-[#1F1F25] font-medium">
                    <span className="font-extrabold">ТСПК</span>
                    Cup
                </p>
                <div className="gap-6 flex flex-row items-center ">
                    <div className="flex flex-col gap-1">
                        <a href="" className="underline">Политика кондифициальности</a>
                        <a 
                            className="text-[#0D0D0E]  bg-[#D4E1FF] 
                            cursor-pointer underline"
                        >Telegram</a>
                        <a 
                            className="text-[#0D0D0E] bg-[#D4E1FF] 
                            cursor-pointer underline"
                        >Дискорд</a>
                    </div>
                    <p>2024 ©️</p>
                    <div className="flex flex-col">
                        <p 
                            className="#1F1F25"
                        >Designer <a 
                            href="https://t.me/c3RlcHVuaw"
                            className="underline"
                            >
                                Stepan Korovin
                            </a>
                        </p>
                        <p 
                            className="#1F1F25"
                        >Frontend dev <a 
                            href="https://t.me/mc_pepsi"
                            className="underline"
                            >
                                Egor Kondrashov
                            </a> 
                        </p>
                        <p 
                            className="#1F1F25"
                        >Frontend dev <a 
                            href="https://t.me/Niktos123"
                            className="underline"
                            >
                                Nikita Kucherenko
                            </a> 
                        </p>
                        <p 
                            className="#1F1F25"
                        >Backend dev <a 
                            href="https://t.me/Eann1S"
                            className="underline"
                            >
                                Danila Ponomarev
                            </a> 
                        </p>
                    </div>
                    
                </div>
        </div>
    )
}