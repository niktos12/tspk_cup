export function Presentation(){
    return(
        <div 
            className="flex flex-row items-center pres-bg items-center justify-center gap-16 h-[876px]"
        >   
            <h1 className="text-[#1F1F25] text-9xl uppercase font-bold">Турнир</h1>
            <h1 className="text-[#1F1F25] text-9xl uppercase font-bold">По</h1>
            <img src={process.env.PUBLIC_URL + "/images/LogoCS2.svg"} alt=""/>

        </div>
    )
}