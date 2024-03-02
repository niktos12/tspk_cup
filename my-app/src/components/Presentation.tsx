import { GoArrowDown } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { Flip } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import "animate.css";

export function Presentation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prevShow) => !prevShow);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className="flex flex-col items-center pres-bg items-center justify-center h-[876px] mt-[-58px] 3xl:h-[100%] x:h-[100%] x:mt-0 bg-contain
             x:bg-contain sm:bg-cover "
    >
      {" "}
      <div
        className="flex flex-row gap-16 items-center justify-center my-40 mb-10 3xl:flex-col 3xl:mt-20 3xl:gap-8 3xl:mb-0 
                x:flex-row x:my-40 sm:flex-col sm:mt-20 sm:gap-8 sm:mb-14 "
      >
        <h1 className="text-[#1F1F25] text-9xl uppercase font-bold x:text-6xl select-none">
          Турнир
        </h1>
        <h1 className="text-[#1F1F25] text-9xl uppercase font-bold x:text-6xl select-none">
          По
        </h1>

        <img
          src={process.env.PUBLIC_URL + "/images/LogoCS2.webp"}
          alt=""
          className="w-[500px] animate__animated animate__headShake animate__infinite animate__duration-3s delay-1000 animate__slow x:w-[300px] select-none"
        />
      </div>
      <a
        className="my-32 cursor-pointer 3xl:mb-16 x:mt-0"
        style={{ scrollBehavior: "smooth" }}
        href="#lists"
      >
        <GoArrowDown className="text-[#3773FF] bg-[#D4E1FF] rounded-full p-6 w-[72px] h-[72px] hover:w-[196px] duration-300" />
      </a>
      <Marquee speed={70} className="w-[75%] h-[100px] uppercase select-none">
        <p className="text-4xl mr-16 bg-[#1F1F25] text-white rounded-3xl px-4 py-3 x:text-3xl sm:text-2xl">
          Тольяттинский социально-педагогический колледж
        </p>
        <p
          className="text-4xl mr-16 text-[#1F1F25] x:text-3xl sm:text-2xl"
          id="lists"
        >
          Центр опережающей профессиональной подготовки
        </p>
      </Marquee>
    </div>
  );
}
