'use client'
import Image from "next/image";
import Mail from '../public/mail.svg'
import Whatsapp from '../public/whatsapp.svg'
import Instagram from '../public/instagram.svg'

import MailGray from '../public/mailgray.svg'
import WhatsappGray from '../public/whatsappgray.svg'
import InstagramGray from '../public/instagramgray.svg'

import Points from '../public/2point.png'
import Germany from '../public/germany.png'
import Map from '../public/map.png'
import Pdf from '../public/pdf.png'
import QA from "../components/QA";
import worldmap from '../public/worldmap.png'
import Logo from '../public/logo.png'

import ArrowWhiteLeft from '../public/ArrowWhiteLeft.svg'
import ArrowBlackRight from '../public/ArrowBlackRight.svg'
import { useRef, useState } from "react";
import CarouselReview from "@/components/CarouselReview/Embla";
import CarouselMain from "@/components/CarouselMain/Embla";
import Link from "next/link";

import Head from 'next/head'

export default function Main() {

  const [burger, setBurger] = useState(false)

  const main = useRef(null)
  const about = useRef(null)
  const service = useRef(null)
  const review = useRef(null)
  const faq = useRef(null)
  const contact = useRef(null)


  const onClickLink = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setBurger(false)
  }

  const downloadPdf = () => {
    const pdfUrl = "./public/Briefing.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const OPTIONS = { align: 'end' }
  return (
    <div ref={main} className="overflow-hidden">
     <Head>
  <title>Deutschland Opportunities — Летняя работа в Германии для студентов Казахстана</title>
  <meta name="description" content="Мы помогаем студентам Казахстана отправиться в Германию на летнюю работу, обеспечивая полную поддержку на всех этапах." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Deutschland Opportunities" />
  <meta name="keywords" content="работа в Германии, летняя работа для студентов, Германия, Казахстан, студенты, McDonald's, культурный обмен" />
  <meta name="google-site-verification" content="SbWepejrcmAcgdjiuP6f8JZRLRGzLwVzjOJ0OMtynEU" />
  <link rel="icon" href="../public/favicon.ico"/>
</Head>
      <header style={burger ? { boxShadow: "0 4px 30px 0 rgba(0, 0, 0, 0.3)" } : {}} className="fixed top-0 z-50 bg-white w-[100%]">
        <div className="container   flex justify-between items-center  h-[100px]">
          <button onClick={() => onClickLink(main)} className="flex items-center gap-[20px]">
            <Image src={Logo} alt="logo" />
            <p className="font-bold"><span className="text-red">Deutschland </span>Opportunities</p>
          </button>
          <div className="hidden lg:flex gap-[60px] font-normal">
            <button onClick={() => onClickLink(about)}>О нас</button>
            <button onClick={() => onClickLink(service)}>Услуги</button>
            <button onClick={() => onClickLink(review)}>Отзывы</button>
            <button onClick={() => onClickLink(faq)}>FAQ</button>
            <button onClick={() => onClickLink(contact)}>Контакты</button>
          </div>
          {/* burger */}
          <div className='lg:hidden'>
            <input value={burger} onChange={() => setBurger(!burger)} type='checkbox' id='burger-checkbox' className='burgerCheckbox' />
            <label htmlFor="burger-checkbox" className='burger'></label>
          </div>
        </div>
        <div className={`menuList ${burger ? 'burgerActive' : ""}`}>
          <button onClick={() => onClickLink(about)}>О нас</button>
          <button onClick={() => onClickLink(service)}>Услуги</button>
          <button onClick={() => onClickLink(review)}>Отзывы</button>
          <button onClick={() => onClickLink(faq)}>FAQ</button>
          <button onClick={() => onClickLink(contact)}>Контакты</button>
        </div>
      </header>

      {/* main */}
      <div className="container">
        <CarouselMain service={service} onClickLink={onClickLink} options={{ ...OPTIONS, containScroll: false }} />
      </div>

      {/*  */}
      <div className="container">
        <section ref={about} className="mt-[25px]">
          <h1 className="relative 2xl:left-[-50px] xl:left-[-40px] lg:left-[-30px] md:left-[-20px] mt-[110px] pl-[50px] w-fit text-red font-normal text-[24px] border-b-2 border-red">О НАС</h1>
          <div className="xs:text-start text-center xs:mx-0 mx-auto mt-[60px] mb-[475px] font-medium text-[20px] w-[300px] xs:w-[480px] sm:w-[625px] lg:w-[500px] text-dark">
            <h1 className="font-semibold sm:text-[48px] text-[32px]">Всё для вашей работы и путешествий: кто мы?</h1>
            <p className="my-[30px]">Мы помогаем студентам Казахстана отправиться в Германию на летнюю работу, обеспечивая полную поддержку от оформления документов до прибытия на место.</p>
            <p> Наша миссия — открыть для молодых людей возможности культурного обмена, помочь обрести самостоятельность, профессиональные навыки и яркие впечатления.</p>
          </div>
          <div className="relative">
            <Image src={Map} alt="Globus" className="right-[-1200px] lg:w-[900px] w-[650px] absolute bottom-[25px] 2xl:right-[-50px] xl:right-[-40px] lg:right-[-30px] md:right-[-20px] sm:right-[-10px] xs:right-0" />
            <Image src={Germany} alt="Germany" className="right-[30%] lg:w-[518px] md:[300px] sm:w-[200px] w-[180px] absolute bottom-[175px] 2xl:right-[30px] xl:right-[-10px] lg:right-[-100px] md:right-[-20px] md:bottom-[90px] sm:right-[50px] sm:bottom-[140px] xs:bottom-[120px] xs:right-0" />
            <Image src={Points} alt="Distance" className="right-[-1200px] absolute bottom-[600px] 2xl:right-[410px] xl:right-[240px] lg:right-[50px] lg:bottom-[650px] md:bottom-[170px] md:right-[230px] sm:bottom-[120px] sm:right-[200px] xs:right-[100px] xs:bottom-[50px]" />
            <div className="absolute info h-auto md:h-[88px] 2xl:right-[-10px] xl:right-[-10px]  lg:right-[120px] lg:bottom-[750px] md:bottom-[350px] md:right-[100px] sm:bottom-[380px] sm:right-[20px] xs:right-0 xs:bottom-[350px] right-[20px] bottom-[270px]">
              <p>Заработная плата:</p>
              <span>от 12,71 € в час</span>
            </div>
            <div className="absolute info h-auto md:h-[88px] 2xl:right-[440px] xl:right-[300px]  lg:right-[220px] lg:bottom-[400px] md:bottom-[180px] md:right-[100px] sm:bottom-[280px] sm:right-[210px] xs:right-[150px] xs:bottom-[260px] right-[30px] bottom-[400px]">
              <p>Виза</p>
              <span>на 90 дней</span>
            </div>
            <div className="absolute info w-[270px] md:w-[377px] h-auto md:h-[133px] 2xl:right-[-10px] xl:right-[-10px]  lg:right-[120px] md:bottom-[50px] sm:bottom-[100px] xs:bottom-[50px] xs:right-[40px] right-[50px] bottom-[80px]">
              <p>Опыт</p>
              <span>работа в международной сети McDonald's.</span>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      <section ref={service}>
        <div className="container bg-dark py-[25px]">
          <h1 className="relative 2xl:left-[-50px] xl:left-[-40px] lg:left-[-30px] md:left-[-20px] pl-[50px] mt-[110px] w-fit text-red font-normal text-[24px] border-b-2 border-red">НАШИ УСЛУГИ</h1>
          <h1 className="font-semibold sm:text-[48px] text-[32px] text-white text-center">Наши Услуги</h1>
          <div className="mt-[60px] flex justify-center gap-[65px] md:flex-row flex-col md:items-stretch items-center ">
            {/* 1 */}
            <div className="flex flex-col text-white w-[240px]">
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-red rounded-full font-bold text-[30px]  text-white">1</div>
              <h1 className="font-bold text-[20px] mt-[25px] mb-[10px]">Оформление визы</h1>
              <p className="font-normal text-[16px]">Мы поддерживаем студентов на каждом этапе подачи документов для получения визы, обеспечивая полное сопровождение.</p>
            </div>
            {/* 2*/}
            <div className="flex flex-col text-white w-[240px]">
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-red rounded-full font-bold text-[30px]  text-white">2</div>
              <h1 className="font-bold text-[20px] mt-[25px] mb-[10px]">Подбор работы</h1>
              <p className="font-normal text-[16px]">Наши специалисты помогут вам устроиться на работу в McDonald’s в Германии, предоставляя все необходимое для успешного трудоустройства на лето.</p>
            </div>
            {/* 3 */}
            <div className="flex flex-col text-white w-[240px]">
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-red rounded-full font-bold text-[30px]  text-white">3</div>
              <h1 className="font-bold text-[20px] mt-[25px] mb-[10px]">Поддержка на всех этапах</h1>
              <p className="font-normal text-[16px]">Мы сопровождаем вас не только в процессе трудоустройства, но и в адаптации, помогая с любыми возникающими вопросами.</p>
            </div>
            {/* 4 */}
            <div className="flex flex-col text-white w-[240px]">
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-red rounded-full font-bold text-[30px]  text-white">4</div>
              <h1 className="font-bold text-[20px] mt-[25px] mb-[10px]">Культурный обмен</h1>
              <p className="font-normal text-[16px]">Работая и путешествуя, вы сможете лучше узнать культуру Германии, участвуя в наших программах обмена.</p>
            </div>
          </div>
          <button onClick={downloadPdf} className="mt-[70px] mb-[50px] flex gap-[20px] text-white items-center mx-auto w-fit p-[16px] rounded-[12px] border border-gray-200 border-opacity-50">
            <Image src={Pdf} alt="pdf" />
            <span>Брифинг</span>
          </button>
        </div>
      </section>
      {/*  */}
      <section ref={review} className="mt-[25px]">
        <div className="container flex flex-col">
          <h1 className="relative 2xl:left-[-50px] xl:left-[-40px] lg:left-[-30px] md:left-[-20px] pl-[50px] mt-[110px] w-fit text-red font-normal text-[24px] border-b-2 border-red">ОТЗЫВЫ</h1>
          <h1 className="font-semibold sm:text-[48px] text-[32px] text-dark text-center mb-[70px]">Отзывы студентов</h1>
          <CarouselReview options={OPTIONS} />
        </div>
      </section>
      {/* */}
      <section ref={faq} className="mt-[25px]">
        <div className="container flex flex-col">
          <h1 className="relative 2xl:left-[-50px] xl:left-[-40px] lg:left-[-30px] md:left-[-20px] pl-[50px] mt-[110px] w-fit text-red font-normal text-[24px] border-b-2 border-red">FAQ</h1>
          <h1 className="font-semibold sm:text-[48px] text-[32px] text-dark text-center">Часто задаваемые вопросы</h1>
          <QA />
        </div>
      </section>
      {/* here */}
      <section ref={contact} className="mt-[25px] mb-[100px]">
        <div className="container flex flex-col">
          <h1 className="relative 2xl:left-[-50px] xl:left-[-40px] lg:left-[-30px] md:left-[-20px] pl-[50px] mt-[110px] w-fit text-red font-normal text-[24px] border-b-2 border-red">КОНТАКТЫ</h1>
          <div className="flex-col lg:flex-row flex justify-center lg:justify-between">
            <div className="mx-auto text-center w-[280px] xs:w-[465px] mt-[65px] mb-[50px] lg:mb-0">
              <h1 className="font-bold text-[24px] xs:text-[30px] uppercase">Оставьте свои <span className="text-red">контактные данные</span></h1>
              <h2 className="font-semibold text-[14px] xs:text-[18px]">Мы свяжемся с вами в ближайшее время!"</h2>
              <form action="https://formsubmit.co/zhumamuratovsamat@gmail.com" method="POST" className="items-center flex flex-col gap-[20px] mt-[30px]">
                <input name="name" className="myinput w-[100%]" required type="text" placeholder="Имя Фамилия" />
                <input name="email" className="myinput w-[100%]" required type="email" placeholder="Ваш email" />
                <input name="phone" className="myinput w-[100%]" type="text" placeholder="+7 (000) 000-00-00" />
                <textarea name="text" className="myinput w-[100%] h-[100px]" type="text" placeholder="Ваше сообщение" />
                <button type="submit" className="mx-auto lg:mx-0 px-[34px] py-[14px] w-fit bg-red text-white rounded-[10px] font-semibold text-[18px]">Отправить заявку</button>
              </form>
            </div>
            <div className="flex gap-[50px] items-center">
              <div className="relative">
                <Image src={worldmap} width={645} height={380} alt='map' />
                <h1 className="absolute top-[10%] left-[40%] font-bold text-[16px] uppercase">Свяжитесь с нами</h1>
                <div className="absolute top-[40%] left-[30%] xs:top-[20%] xs:left-[40%] contact text-center w-[200px] xs:w-fit px-[15px] py-[20px] flex flex-col font-medium text-[18px]">
                  <p style={{ color: "#4f4f4f" }}>Телефон номер</p>
                  <p style={{ color: "#4f4f4f" }} className="mt-[10px]">+7 702 416 35 23</p>
                  <div className="mt-[14px] w-full flex justify-between items-center">
                    <a href="mailto:deutschland-opportunities@de-opportunities.kz"><Image src={MailGray} alt="Mail" /></a>
                    <a href="https://wa.me/+77051801913" target="_blank"><Image src={WhatsappGray} alt="Whatsapp" /></a>
                    <a href="https://www.instagram.com/deutschland_opportunities/" target="_blank"><Image src={InstagramGray} alt="Instagram" /></a>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="my-auto xs:mr-0 mr-[10px] ">
                <div style={{ background: "#CCCCCC" }} className="w-[2px] h-[80px] opacity-30 ml-auto"></div>
                <div style={{ background: "#CCCCCC" }} className="w-[2px] h-[80px] opacity-30 ml-auto"></div>
                <div style={{ background: "black" }} className="w-[2px] h-[80px] opacity-100 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <footer className="w-[100%]" style={{ background: "#F4F4F4" }}>
        <div className="container flex flex-col text-center">
          <div className="mt-[30px] sm:mb-[55px] mb-[35px] m-auto">
            <button onClick={() => onClickLink(main)} className="flex justify-center items-center gap-[20px]">
              <Image src={Logo} alt="logo" />
              <p className="font-bold"><span className="text-red">Deutschland </span>Opportunities</p>
            </button>
          </div>
          <div style={{ color: "#6D6D6D" }} className="sm:flex-row flex-col flex sm:gap-[65px] gap-[20px] font-normal m-auto">
            <button onClick={() => onClickLink(about)}>О нас</button>
            <button onClick={() => onClickLink(service)}>Услуги</button>
            <button onClick={() => onClickLink(review)}>Отзывы</button>
            <button onClick={() => onClickLink(faq)}>FAQ</button>
            <button onClick={() => onClickLink(contact)}>Контакты</button>
          </div>
          <div className="mt-[50px] mb-[33px] h-[1px] w-[75%] m-auto bg-dark"></div>
          <div className="mb-[66px] flex justify-between items-center">
            <div style={{ color: "#6D6D6D" }} className="text-start font-medium text-[16px]">
              <p>© 2024 Deutschland Opportunities.</p>
              <p>Все права защищены.</p>
            </div>
            <div className="flex gap-[28px]">
              <a href="mailto:deutschland-opportunities@de-opportunities.kz"><Image src={MailGray} alt="Mail" /></a>
              <a href="https://wa.me/+77051801913" target="_blank"><Image src={WhatsappGray} alt="Whatsapp" /></a>
              <a href="https://www.instagram.com/deutschland_opportunities/" target="_blank"><Image src={InstagramGray} alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}