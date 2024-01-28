import { GoArrowDown } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { Flip } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import 'animate.css';


export function Presentation(){

    const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(prevShow => !prevShow);
    }, 2000);

    return () => clearInterval(interval);
  })
    
    return(
        <div 
            className="flex flex-col items-center pres-bg items-center justify-center h-[876px] mt-36"
        >   <div 
                className="flex flex-row gap-16  items-center justify-center my-40 mb-10"
            >
                <h1 
                    className="text-[#1F1F25] text-9xl uppercase font-bold"
                >
                    Турнир
                </h1>
                <h1 
                    className="text-[#1F1F25] text-9xl uppercase font-bold"
                >
                    По
                </h1>
                {/* <Flip duration={900} direction={'horizontal'} delay={1} key={show.toString()}>
                    <img 
                    src={process.env.PUBLIC_URL + "/images/LogoCS2.svg"} 
                    alt=""
                />
                </Flip> */}
                <img 
                    src={process.env.PUBLIC_URL + "/images/LogoCS2.svg"} 
                    alt=""
                    className="animate__animated animate__headShake animate__infinite animate__duration-3s delay-1000 animate__slow"
                />
                
                
                
            </div>
            <a 
                className="my-32 cursor-pointer"
                style={{scrollBehavior: "smooth"}}
                href="#lists"   
            >
                <GoArrowDown 
                    className="text-[#3773FF] bg-[#D4E1FF] rounded-full p-6 w-[72px] h-[72px]"
                    
                />
            </a>
            <Marquee 
                speed={50}
                className="w-[75%] h-[100px] uppercase select-none"
            >
                <p 
                    className="text-4xl mr-16 bg-[#1F1F25] text-white rounded-3xl px-4 py-3"
                >
                    Тольяттинский социально-педагогический колледж
                </p>
                <p 
                    className="text-4xl mr-16 text-[#1F1F25]"
                >
                    Центр опережающей профессиональной подготовки
                </p>
            </Marquee>
        </div>
    )
}