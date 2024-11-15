'use client'
import React, { useCallback } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'
import Carousel1 from '../../public/Ulmeken.jpg'
import Carousel2 from '../../public/Darkhan.jpg'
import Carousel3 from '../../public/Alikhan.jpg'


const EmblaCarousel = (props) => {
  const { options } = props
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
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className='embla__slide item'>
            <Image className='rounded-[20px]' src={Carousel1} alt='carousel 1' />
            <div className='item-text flex flex-col'>
              <p className='m-[10px]'>“Это было самое лучшее лето в моей жизни! Благодаря <span className='font-bold'>Deutschland Opportunities</span> я не только заработала хорошие деньги, но и познакомилась с невероятными людьми.”</p>
              <span className='font-bold text-end'>– Ұлмекен, студентка из Алматы</span>
            </div>
          </div>
          <div className="embla__slide item">
            <Image className='rounded-[20px]' src={Carousel2} alt='carousel 1' />
            <div className='item-text flex flex-col'>
              <p className='m-[10px]'>“Программа оказалась отличным способом попрактиковать немецкий язык и открыть для себя страну с другой стороны.”</p>
              <span className='font-bold text-end'>– Дархан, студент SDU</span>
            </div>
          </div>
          <div className="embla__slide item">
            <Image className='rounded-[20px]' src={Carousel3} alt='carousel 1' />
            <div className='item-text flex flex-col'>
              <p className='m-[10px]'>“Команда сопровождала меня на каждом этапе — от подачи заявки на визу до поиска работы. Это был потрясающий опыт работать и исследовать Германию..”</p>
              <span className='font-bold text-end'>– Алихан, студент из Алматы</span>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
