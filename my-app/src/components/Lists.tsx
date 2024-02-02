import { Disclosure } from '@headlessui/react'
import { TiArrowSortedDown } from "react-icons/ti";
export function Lists() {
    return(
        <div 
            className="flex flex-col items-start justify-center mt-[96px] pl-[96px] pres-bg-2 h-[900px] xl:p-4 xl:items-center x:items-start x:bg-left-bottom
            x:bg-contain m:mt-4 m:justify-start m:h-full"
            id='lists'
        >
            <h1 
                className="text-8xl font-bold x:text-5xl"
            >
                Немного о турнире
            </h1>
            <div className='w-full max-w-[896px]'>
                <div 
                    className="flex flex-col mt-[24px]"
                >
                    <div 
                        className="gap-[24px] flex flex-col "
                    >
                        <Disclosure 
                            defaultOpen={true}
                            as='div'
                            className='duration-300 transition-all '
                        >
                        {({ open }) => (
                            <div 
                                className="flex flex-col gap-[24px] justify-between rounded-[24px] backdrop-blur-md p-[48px] border-black border x:p-3"
                            >
                                <Disclosure.Button className='disclosure-btn'>
                                    <div 
                                        className='flex items-center justify-between'
                                    >
                                        <div 
                                            className=''
                                        >
                                            <img 
                                                src={process.env.PUBLIC_URL + "/images/Ranking.svg"} 
                                                alt=""
                                                className='select-none xm:w-14 xm:h-14'
                                            />
                                        </div>
                                        <TiArrowSortedDown
                                            className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                        />
                                    </div>
                                    <span 
                                        className='text-4xl flex font-semibold mt-[24px] x:text-3xl text-left'
                                    >
                                        Где проходит?
                                    </span>
                                    <Disclosure.Panel className={`duration-300 transition-all disclosure-panel`}>
                                        <p 
                                            className='flex text-4xl text-[#1F1F25] mt-[24px] text-left x:text-3xl xm:text-xl'
                                        >
                                            Первая часть турнира будет проходить онлайн. Финал — в ЦОППе
                                        </p>
                                    </Disclosure.Panel>
                                </Disclosure.Button>
                            
                            </div>
                        )}
                        </Disclosure>

                        <Disclosure 
                            as="div" 
                            className="flex flex-col"
                        >
                        {({ open }) => (
                            <div 
                                className="flex flex-col gap-[24px] justify-between rounded-[24px] backdrop-blur-md p-[48px] border-black border x:p-3"
                            >
                            <Disclosure.Button>
                                <div 
                                    className='flex justify-between items-center'
                                >
                                    <div 
                                        className=''
                                    >
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/Cup.svg"} 
                                            alt=""
                                            className='select-none xm:w-14 xm:h-14' 
                                        />
                                    </div>
                                    <TiArrowSortedDown
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                    />
                                </div>
                                <span 
                                    className='text-4xl flex font-semibold mt-[24px] x:text-3xl text-left'
                                >
                                    Какие будут призы?
                                </span>
                                <Disclosure.Panel>
                                    <p 
                                        className='flex text-4xl text-[#1F1F25] mt-[24px] text-left x:text-3xl xm:text-xl'
                                    >
                                        Призом турнира будет автомат по любой дисциплине Кондурар М.В (на выбор)
                                    </p>
                                </Disclosure.Panel>
                            </Disclosure.Button>
                            </div>
                        )}
                        </Disclosure>

                        <Disclosure 
                            as="div" 
                            className="flex flex-col max-h-[228px]"
                            
                        >
                        {({ open }) => (
                            <div 
                                className="flex flex-col gap-[24px] justify-between rounded-[24px] backdrop-blur-md p-[48px] border-black border x:p-3"
                            >
                            <Disclosure.Button>
                                <div 
                                    className='flex justify-between items-center'
                                >
                                    <div 
                                        className=''
                                    >
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/Pen New Round.svg"} 
                                            alt=""
                                            className='select-none xm:w-14 xm:h-14' 
                                        />
                                    </div>
                                    <TiArrowSortedDown
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                    />
                                </div>
                                <span 
                                    className='text-4xl flex font-semibold mt-[24px] x:text-3xl text-left'
                                >
                                    Новости
                                </span>
                                <Disclosure.Panel>
                                    <p 
                                        className='flex text-4xl text-[#1F1F25] mt-[24px] text-left x:text-3xl xm:text-xl'
                                    >
                                        Следите за новостями в наших телеграм и дискорд каналах
                                    </p>
                                </Disclosure.Panel>
                            </Disclosure.Button>
                            </div>
                        )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    )
}