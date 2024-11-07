'use client'
import React, { useCallback } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './Arrow'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import cls from './main.module.css'

import Image from "next/image";
import Mail from '../../public/mail.svg'
import Whatsapp from '../../public/whatsapp.svg'
import Instagram from '../../public/instagram.svg'

const EmblaCarousel = (props) => {
    const { service, onClickLink, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <main className={cls.embla + " relative"}>
            <div className={cls.embla__viewport} ref={emblaRef}>
                <div className={cls.embla__container}>
                    <div className={cls.embla__slide + " 2xl:px-[50px] xl:px-[40px] lg:px-[30px] md:px-[20px] sm:px-[10px] mt-[100px]  rounded-[32px]  bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat bg-[url('../public/main-bg1.png')]"}>
                        <div className={cls.embla__slide__number}></div>
                    </div>
                    <div className={cls.embla__slide + " 2xl:px-[50px] xl:px-[40px] lg:px-[30px] md:px-[20px] sm:px-[10px] mt-[100px]  rounded-[32px]  bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat bg-[url('../public/main-bg1.png')]"}>
                        <div className={cls.embla__slide__number}></div>
                    </div>
                </div>
            </div>
            <div className='  absolute  top-0 left-0 w-full xs:h-[820px] h-[460px]
            2xl:px-[50px] xl:px-[40px] lg:px-[30px] md:px-[20px] sm:px-[10px] xs:px-[10px] px-[10px]  mt-[100px]  rounded-[32px]'>
                <div className='flex flex-col text-center h-[100%]'>
                    <h1 className="pt-[20px] xs:pt-[100px] font-bold text-white sm:text-[64px] text-[32px]">Откройте летние возможности в Германии</h1>
                    <div className="flex justify-between text-white">
                        <div className="my-auto flex flex-col gap-[28px]">
                            <a href="mailto:deutschland-opportunities@de-opportunities.kz"><Image src={Mail} alt="Mail" /></a>
                            <a href="https://wa.me/+77051801913" target="_blank"><Image src={Whatsapp} alt="Whatsapp" /></a>
                            <a href="https://www.instagram.com/deutschland_opportunities/" target="_blank"><Image src={Instagram} alt="Instagram" /></a>
                        </div>
                        <div className="h-[200px] xs:h-[350px] flex flex-col justify-between items-center font-normal text-[14px] xs:text-[18px] md:text-[24px]">
                            <p>Мы поможем вам найти работу и создать незабываемые воспоминания.</p>
                            <button onClick={() => onClickLink(service)} className="rounded-[20px] bg-white text-dark py-[14px] px-[24px]">Услуги</button>
                        </div>
                        <div className="my-auto">
                            <div className="w-[2px] h-[80px] opacity-100 bg-white ml-auto"></div>
                            <div className="w-[2px] h-[80px] opacity-30 bg-white ml-auto"></div>
                            <div className="w-[2px] h-[80px] opacity-30 bg-white ml-auto"></div>
                        </div>
                    </div>
                    <div className={cls.embla__controls + " mt-auto pb-[60px]"}>
                        <div className={cls.embla__buttons}>
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EmblaCarousel
