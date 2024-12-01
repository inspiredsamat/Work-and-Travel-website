'use client'

import { useState } from "react"
import Image from "next/image"
import open from '../public/open.svg'
import close from '../public/close.svg'

export default function () {
    const [qa1, setQa1] = useState(false)
    const [qa2, setQa2] = useState(false)
    const [qa3, setQa3] = useState(false)
    const [qa4, setQa4] = useState(false)

    const onClick1 = () => {
        setQa1(!qa1)
        setQa2(false)
        setQa3(false)
    }

    const onClick2 = () => {
        setQa2(!qa2)
        setQa1(false)
        setQa3(false)
    }

    const onClick3 = () => {
        setQa3(!qa3)
        setQa1(false)
        setQa2(false)
    }

    const onClick4 = () => {
        setQa4(!qa4)
        setQa1(false)
        setQa2(false)
        setQa3(false)
    }

    return (
        <div className="container flex justify-between">
            <div className="w-[2px] h-[240px] my-auto">
            </div>
            <div className="flex flex-col gap-[40px] mt-[40px]">
                <div className="qa-item w-[90%] sm:w-[80%] mx-auto p-[10px] sm:p-[20px] md:p-[40px] rounded-[14px]">
                    <button onClick={onClick1} className="flex justify-between w-full items-center">
                        <p className="font-semibold text-[14px] md:text-[22px] text-start">Кто может подать заявку на летнюю работу через Deutschland Opportunities?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa1 ? 'red' : 'white'}`}>
                            <Image src={qa1 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa1 ? 'open' : ''}`}>
                    Студенты из Казахстана в возрасте от 18 лет с базовыми знаниями немецкого или английского языка. Опыт работы не требуется, главное – трудолюбие и мотивация.
                    </div>
                </div>
                <div className="qa-item w-[90%] sm:w-[80%] mx-auto p-[10px] sm:p-[20px] md:p-[40px] rounded-[14px]">
                    <button onClick={onClick2} className="flex justify-between w-full items-center">
                        <p className="font-semibold text-[14px] md:text-[22px]  text-start">Какие вакансии доступны в вашей программе?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa2 ? 'red' : 'white'}`}>
                            <Image src={qa2 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa2 ? 'open' : ''}`}>
                    На данный момент мы предлагаем вакансии в McDonald’s в Германии, включая позиции на кухне, кассира и общего персонала. Это отличная возможность приобрести полезный опыт работы.
                    </div>
                </div>
                <div className="qa-item w-[90%] sm:w-[80%] mx-auto p-[10px] sm:p-[20px] md:p-[40px] rounded-[14px]">
                    <button onClick={onClick3} className="flex justify-between w-full items-center">
                        <p className="font-semibold text-[14px] md:text-[22px] text-start">Как проходит процесс подачи заявки?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa3 ? 'red' : 'white'}`}>
                            <Image src={qa3 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa3 ? 'open' : ''}`}>
                    Процесс включает подачу анкеты, собеседование и предоставление необходимых документов для получения визы и трудоустройства. Мы сопровождаем вас на всех этапах – от подготовки до начала работы в Германии.
                    </div>
                </div>
            </div>
            <div className="my-auto xs:mr-0 mr-[10px] ">
                <div style={{ background: "#CCCCCC" }} className="w-[2px] h-[80px] opacity-30 ml-auto"></div>
                <div style={{ background: "black" }} className="w-[2px] h-[80px] opacity-100 ml-auto"></div>
                <div style={{ background: "#CCCCCC" }} className="w-[2px] h-[80px] opacity-30 ml-auto"></div>
            </div>
        </div >
    )
}