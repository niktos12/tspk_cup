import { Navigation } from "./Navigation"

export function Header() {
    return(
        <header className="max-w-[1728px] p-12 flex bg-[#D4E1FE] m-auto rounded-[64px] g-12">
            <div className="w-[964px]">
                <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" className="bg-[#D4E1FF] p-3 rounded-[16px]"/>
            </div>
            <Navigation />
        </header>
    )
}