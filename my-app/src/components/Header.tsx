import { Navigation } from "./Navigation"

export function Header() {
    return(
        <header 
            className="w-full p-12 flex items-center justify-center flex-row"
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