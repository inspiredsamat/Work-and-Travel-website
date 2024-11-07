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
                        <p className="font-semibold text-[14px] md:text-[22px] text-start">Как я могу подать заявку на программу?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa1 ? 'red' : 'white'}`}>
                            <Image src={qa1 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa1 ? 'open' : ''}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rem veritatis aperiam odio quis incidunt explicabo perferendis aut mollitia quam tempore, esse velit consequatur, sequi dolore. Quis, temporibus! Culpa, qui?
                        Minima, earum doloremque! Minima, architecto numquam. Modi, exercitationem, magnam ex sunt voluptatibus, odit nisi ipsum quasi dolorum minus sint deserunt consequuntur dolores aliquam. Ducimus architecto asperiores vero ad voluptatum non?
                        Quaerat doloribus error culpa obcaecati ut? Placeat, rerum ipsum ex facere fugiat ipsam voluptates ipsa quos, voluptas quis sequi laborum eveniet expedita vero explicabo, sunt nostrum dignissimos! Ea, accusamus at?
                    </div>
                </div>
                <div className="qa-item w-[90%] sm:w-[80%] mx-auto p-[10px] sm:p-[20px] md:p-[40px] rounded-[14px]">
                    <button onClick={onClick2} className="flex justify-between w-full items-center">
                        <p className="font-semibold text-[14px] md:text-[22px]  text-start">Как я могу подать заявку на программу?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa2 ? 'red' : 'white'}`}>
                            <Image src={qa2 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa2 ? 'open' : ''}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rem veritatis aperiam odio quis incidunt explicabo perferendis aut mollitia quam tempore, esse velit consequatur, sequi dolore. Quis, temporibus! Culpa, qui?
                        Minima, earum doloremque! Minima, architecto numquam. Modi, exercitationem, magnam ex sunt voluptatibus, odit nisi ipsum quasi dolorum minus sint deserunt consequuntur dolores aliquam. Ducimus architecto asperiores vero ad voluptatum non?
                        Quaerat doloribus error culpa obcaecati ut? Placeat, rerum ipsum ex facere fugiat ipsam voluptates ipsa quos, voluptas quis sequi laborum eveniet expedita vero explicabo, sunt nostrum dignissimos! Ea, accusamus at?
                    </div>
                </div>
                <div className="qa-item w-[90%] sm:w-[80%] mx-auto p-[10px] sm:p-[20px] md:p-[40px] rounded-[14px]">
                    <button onClick={onClick3} className="flex justify-between w-full items-center">
                        <p className="font-semibold text-[14px] md:text-[22px] text-start">Как я могу подать заявку на программу?</p>
                        <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full whitebg bg-${qa3 ? 'red' : 'white'}`}>
                            <Image src={qa3 ? close : open} alt="toggle" />
                        </div>
                    </button>
                    <div className={`content ${qa3 ? 'open' : ''}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rem veritatis aperiam odio quis incidunt explicabo perferendis aut mollitia quam tempore, esse velit consequatur, sequi dolore. Quis, temporibus! Culpa, qui?
                        Minima, earum doloremque! Minima, architecto numquam. Modi, exercitationem, magnam ex sunt voluptatibus, odit nisi ipsum quasi dolorum minus sint deserunt consequuntur dolores aliquam. Ducimus architecto asperiores vero ad voluptatum non?
                        Quaerat doloribus error culpa obcaecati ut? Placeat, rerum ipsum ex facere fugiat ipsam voluptates ipsa quos, voluptas quis sequi laborum eveniet expedita vero explicabo, sunt nostrum dignissimos! Ea, accusamus at?
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