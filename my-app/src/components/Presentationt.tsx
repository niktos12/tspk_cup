import { GoArrowDown } from "react-icons/go";
import Marquee from "react-fast-marquee";


export function Presentation(){
    
    return(
        <div 
            className="flex flex-col items-center pres-bg items-center justify-center h-[876px] mt-36"
        >   <div className="flex flex-row gap-16  items-center justify-center my-40 mb-10">
                <h1 className="text-[#1F1F25] text-9xl uppercase font-bold">Турнир</h1>
                <h1 className="text-[#1F1F25] text-9xl uppercase font-bold">По</h1>
                <img src={process.env.PUBLIC_URL + "/images/LogoCS2.svg"} alt=""/>
            </div>
            <div className="my-32">
                <GoArrowDown className="text-[#3773FF] bg-[#D4E1FF] rounded-full p-6 w-[72px] h-[72px]"/>
            </div>
            <Marquee speed={50} style={{width: "75%" , height: "100px"}} >
                <p className="text-4xl mr-16 bg-[#1F1F25] text-white rounded-3xl px-4 py-3">Тольяттинский социально-педагогический колледж</p>
                <p className="text-4xl mr-16 text-[#1F1F25]">Центр опережающей профессиональной подготовки</p>
            </Marquee>
                    
            
            

        </div>
    )
}