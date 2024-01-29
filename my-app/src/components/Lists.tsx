import { Disclosure } from '@headlessui/react'
import { TiArrowSortedDown } from "react-icons/ti";
export function Lists() {
    return(
        <div 
            className="flex flex-col items-start justify-center mt-[96px] pl-[96px] pres-bg-2 h-[900px]"
            id='lists'
        >
            <h1 
                className="text-8xl font-bold"
            >
                Немного о турнире
            </h1>
            <div>
                <div 
                    className="flex flex-col mt-[24px]"
                >
                    <div 
                        className="gap-[24px] flex flex-col"
                    >
                        <Disclosure 
                            defaultOpen={true}
                            as='div'
                            className='duration-300 transition-all'
                        >
                        {({ open }) => (
                            <div 
                                className="flex flex-col gap-[24px] justify-between rounded-[24px] backdrop-blur-md p-[48px] border-black border"
                            >
                                <Disclosure.Button className='disclosure-btn'>
                                    <div 
                                        className='flex gap-[16px] items-center'
                                    >
                                        <div 
                                            className='w-[860px]'
                                        >
                                            <img 
                                                src={process.env.PUBLIC_URL + "/images/Ranking.svg"} 
                                                alt=""
                                                className='select-none'
                                            />
                                        </div>
                                        <TiArrowSortedDown
                                            className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                        />
                                    </div>
                                    <span 
                                        className='text-4xl flex font-semibold mt-[24px]'
                                    >
                                        Где проходит?
                                    </span>
                                    <Disclosure.Panel className={`duration-300 transition-all disclosure-panel`}>
                                        <p 
                                            className='flex text-4xl text-[#1F1F25] mt-[24px] max-w-[934px] text-left'
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
                                className="flex flex-col gap-[24px] justify-between rounded-[24px] backdrop-blur-md p-[48px] border-black border"
                            >
                            <Disclosure.Button>
                                <div 
                                    className='flex gap-[16px] items-center'
                                >
                                    <div 
                                        className='w-[860px]'
                                    >
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/Cup.svg"} 
                                            alt=""
                                            className='select-none' 
                                        />
                                    </div>
                                    <TiArrowSortedDown
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                    />
                                </div>
                                <span 
                                    className='text-4xl flex font-semibold mt-[24px]'
                                >
                                    Какие будут призы?
                                </span>
                                <Disclosure.Panel>
                                    <p 
                                        className='flex text-4xl text-[#1F1F25] mt-[24px] w-[934px] text-left'
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
                            className="flex flex-col w-[1030px] max-h-[228px]"
                            
                        >
                        {({ open }) => (
                            <div 
                                className="flex flex-col gap-[24px] h-[340px] justify-between rounded-[24px] backdrop-blur-md p-[48px] max-w-[1030px] border-black border"
                            >
                            <Disclosure.Button>
                                <div 
                                    className='flex gap-[16px] items-center'
                                >
                                    <div 
                                        className='w-[860px]'
                                    >
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/Pen New Round.svg"} 
                                            alt=""
                                            className='select-none' 
                                        />
                                    </div>
                                    <TiArrowSortedDown
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 w-[64px] h-[64px] text-[#3773FF] duration-300`}
                                    />
                                </div>
                                <span 
                                    className='text-4xl flex font-semibold mt-[24px]'
                                >
                                    Новости
                                </span>
                                <Disclosure.Panel>
                                    <p 
                                        className='flex text-4xl text-[#1F1F25] mt-[24px] w-[934px] text-left'
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