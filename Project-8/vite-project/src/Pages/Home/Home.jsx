import React, { useEffect, useState } from "react";
import Group1698 from "../../Images/Group 1698.png";
import Group15 from "../../Images/Group 15 1.png";
import image23 from "../../Images/image 23.png";
import image55 from "../../Images/image 55.png";
import inst from "../../Images/inst.png";
import icon from "../../Images/icon.png";
import bt from "../../Images/bt.png";
import icon2 from "../../Images/icon (2).png";
import telephone from "../../Images/telephone.png";
import telephone2 from "../../Images/telephone2.png";
import icon1 from "../../Images/icon (1).png";
import maplocation from "../../Images/map-location 1.png";
import maplocation2 from "../../Images/map-location 1 (1).png";
import maplocation3 from "../../Images/map-location 1 (2).png";
import image from "../../Images/mask group.png";
import img12 from "../../Images/img12.png";
import image39 from "../../Images/image 39.png";
import img from "../../Images/img.png";
import wwww from "../../Images/wwww.png";
import img2 from "../../Images/img (2).png";
import img3 from "../../Images/img (3).png";
import img111 from "../../Images/img111.png";
import img1112 from "../../Images/img1112.png";
import bg from "../../Images/bg.png";
import bg1 from "../../Images/bg (1).png";
import bg2 from "../../Images/bg (2).png";
import fb from "../../Images/fb.png";
import hover from "../../Images/hover.png";
import whitecloud from "../../Images/white-cloud 1.png";
import whitecloud1 from "../../Images/white-cloud 1 (1).png";
import Group1 from "../../Images/Group 1.png";
import Group2 from "../../Images/Group 2.png";

import vector12 from "../../Images/vector 12.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Btn1 from "../../components/Btn1/Btn1";
import Swiper1 from "../../components/Swiper1/Swiper1";
import Swiper2 from "../../components/Swiper2/Swiper2";
import Swiper3 from "../../components/Swiper3/Swiper3";
import SimpleAccordion from "../../components/Accordion/Accordion";
import TemporaryDrawer from "../../components/Drawer/Drawer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [check, setCheck] = useState("ru");
  return (
    <div className="dark:bg-black relative z-[0]">
      <header className="container1 relative z-10">
        <div className="container111 relative z-20">
          <div className="container11 relative z-30">
            <nav className="flex items-center justify-between p-[18px_0_29px_0]">
              <div className="flex items-center gap-[15px]">
                <img src={Group1698} className="xl:order-2" alt="" />
                <div className="flex items-center xl:order-1">
                  <div className="flex items-center gap-[22px] pb-[2px]">
                    <img src={inst} alt="" />
                    <img src={fb} alt="" />
                  </div>
                  <img src={hover} alt="" />
                </div>
              </div>

              <ul className="font-[400] xl:hidden text-[14px] text-[#7A7A7A] leading-[13.4px] flex items-center gap-[18px]">
                <div className=" flex flex-col">
                  <Link to="/">
                    <li className="text-[#52BFFF]">{t("Главная")}</li>
                  </Link>
                  <img src={image23} className="w-[50px]" alt="" />
                </div>
                <Link to="/About">
                  <li>{t("О нас")}</li>
                </Link>
                <Link to="/Services">
                  <li>{t("Услуги")}</li>
                </Link>
                <Link to="/Universities">
                  <li>{t("Университеты")}</li>
                </Link>
                <Link to="/Students">
                  <li>{t("Студенты")}</li>
                </Link>
                <Link to="/News">
                  <li>{t("Новости")}</li>
                </Link>
                <Link to="/Contacts">
                  <li>{t("Контакты")}</li>
                </Link>
              </ul>

              <div className="flex items-center gap-[20px] xl:hidden">
                <div className=" flex items-center gap-[6px]">
                  {check == "ru" ? (
                    <button
                      onClick={() => {
                        changeLanguage("ru");
                        setCheck("ru");
                      }}
                      className="font-[700] text-[12px] leading-[11px] text-[#52BFFF]"
                    >
                      РУС
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        changeLanguage("ru");
                        setCheck("ru");
                      }}
                      className="font-[400] text-[12px] text-[#7A7A7A] leading-[11px]"
                    >
                      РУС
                    </button>
                  )}
                  {check == "uz" ? (
                    <button
                      onClick={() => {
                        changeLanguage("uz");
                        setCheck("uz");
                      }}
                      className="font-[700] text-[12px] leading-[11px] text-[#52BFFF]"
                    >
                      UZ
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        changeLanguage("uz");
                        setCheck("uz");
                      }}
                      className="font-[400] text-[12px] text-[#7A7A7A] leading-[11px]"
                    >
                      UZ
                    </button>
                  )}
                </div>
                <Link to="/Request">
                  <button className="flex items-center gap-[14px] p-[5px_19px_5px_5px] bg-white rounded-[25px]">
                  <img src={icon} alt="" />
                  <span className="font-[700] text-[16px] text-[#52BFFF] text-center leading-[15px]">
                    {t("Оставить заявку")}
                  </span>
                </button>
                  </Link>
              </div>
              <div className="hidden xl:flex">
              <TemporaryDrawer/>
              </div>
            </nav>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[25px] p-[101px_0_377px_0] md:p-[101px_0_200px_0]">
              <h1 className="font-[700] text-[44px] text-[] dark:text-white leading-[60px] max-w-[690px]">
                {t("Грант и контрактное обучение в ")}
                <span className="text-[#52BFFF]"> {t("зарубежных ")}</span>
                {t("вузах")}
              </h1>
              <div className="flex flex-col gap-[50px] items-start">
                <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px] max-w-[677px]">
                  {t(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                  )}
                </p>
                <Btn1 img={icon1} text={t("Связаться с нами")} />
              </div>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[40px] xl:hidden">
              <div className="flex items-center gap-[10px]">
                <img src={telephone} alt="" />
                <span className="font-[700] text-[15px] text-[#313131] leading-[14px]">
                  {t("г. Город")}
                </span>
                <span className="font-[400] text-[15px] text-[#7A7A7A] leading-[14px]">
                  {t("ул. Улица, 24 (Офис 24)")}
                </span>
              </div>

              <div className="flex items-center gap-[10px]">
                <img src={telephone2} alt="" />
                <span className="font-[700] text-[15px] text-[#313131] leading-[14px]">
                  {t("Пн-Пт 9:00 - 18:00")}
                </span>
              </div>
            </div>
          </div>
          <img
            src={bg}
            className=" absolute top-0 left-0 w-[100%] h-[100%] z-[-1] dark:opacity-[40%] md:hidden "
            alt=""
            data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
          />
          <img src={bg2} className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] hidden md:block" alt="" />
        </div>
      </header>

      <section className="container1 ">
        <div className="container111 relative ">
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container11 flex flex-col gap-[105px] md:pb-[100px] md:pt-0 py-[75px]">
            <div className="flex items-center justify-end gap-[202px] xl:justify-center">
              <div className="max-w-[400px] flex flex-col gap-[5px]">
                <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white text-center leading-[26px]">
                  {t("Добро пожаловать в нашу группу иностранного образования")}
                </p>
                <h2 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
                  {t("Почему мы?")}
                </h2>
              </div>
              <div className="flex items-center gap-[30px] xl:hidden">
                <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                  {t("Смотреть все")}
                </p>
                <img src={vector12} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between xl:flex-wrap xl:justify-center xl:gap-[75px]">
              <div className="p-[12px] shadow-[0_0_25px_0] shadow-[#0000000D] dark:shadow-[#ffffff64] w-max rounded-[20px]">
                <div className="p-[60px_37px_18px_36px] w-[343px] h-[156px] relative rounded-[20px] border-[1px] border-dashed border-[#ECF6FC]">
                  <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white text-center leading-[26px]">
                    {t(
                      "Сертифицированные услуги нашей профессиональной команды"
                    )}
                  </p>
                  <img
                    src={img12}
                    className=" absolute top-[-40%] left-[25%]"
                    alt=""
                  />
                </div>
              </div>

              <div className="p-[12px] shadow-[0_0_25px_0] shadow-[#0000000D] dark:shadow-[#ffffff64] w-max rounded-[20px]">
                <div className="p-[60px_37px_18px_36px] w-[343px] h-[156px] relative rounded-[20px] border-[1px] border-dashed border-[#ECF6FC]">
                  <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white text-center leading-[26px]">
                    {t(
                      "Сертифицированные услуги нашей профессиональной команды"
                    )}
                  </p>
                  <img
                    src={img12}
                    className=" absolute top-[-40%] left-[25%]"
                    alt=""
                  />
                </div>
              </div>

              <div className="p-[12px] shadow-[0_0_25px_0] shadow-[#0000000D] dark:shadow-[#ffffff64] w-max rounded-[20px]">
                <div className="p-[60px_37px_18px_36px] w-[343px] h-[156px] relative rounded-[20px] border-[1px] border-dashed border-[#ECF6FC]">
                  <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white text-center leading-[26px]">
                    {t(
                      "Сертифицированные услуги нашей профессиональной команды"
                    )}
                  </p>
                  <img
                    src={img12}
                    className=" absolute top-[-40%] left-[25%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <img src={img111} className=" absolute left-0 top-[-35%] lg770:hidden z-10" alt="" />
        </div>
      </section>

      <section className="container1">
        <div className="container111 relative z-[1]">
          <div className="container11 flex flex-col gap-[105px] py-[100px]">
            <div className="flex items-center justify-end gap-[202px] xl:justify-center">
              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[400px] flex flex-col gap-[5px]">
                <h2 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
                  {t("Университеты")}
                </h2>
                <p className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white text-center leading-[26px]">
                  {t(
                    "В нашем каталоге вы найдете более 100 университетов из более чем 14 стран"
                  )}
                </p>
              </div>
              <div className="flex items-center gap-[30px] xl:hidden">
                <p className="font-[400] text-[18px] text-[#7A7A7A] leading-[26px]">
                  {t("Смотреть все")}
                </p>
                <img src={vector12} alt="" />
              </div>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="">
              <Swiper1 img={image} h1="Россия" p="15 вузов" />
            </div>
          </div>
          <img
            src={whitecloud}
            className=" absolute top-0 left-0 w-[100%] h-[100%] z-[-3] dark:opacity-[40%]"
            alt=""
          />

          <div className="container111 relative z-[-1]">
            <div className="container11 flex flex-col gap-[20px] pt-[120px] pb-[187px]">
              <h1 className="font-[700] text-[36px] text-center text-[#52BFFF] leading-[46px]">
                {t("Отзывы наших студентов")}
              </h1>

              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <Swiper2
                  img={img}
                  h1="Александр Иванов"
                  p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!"
                />
              </div>
            </div>
            <img
              src={Group1}
              className=" absolute top-0 left-0 w-[100%] h-[100%] dark:opacity-[70%]"
              alt=""
            />
            <img
              src={Group2}
              className=" absolute bottom-[-26%] left-0 w-[100%] xl:hidden"
              alt=""
            />
            <img
              src={img1112}
              className=" absolute right-0 bottom-[-29%]"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="container111 relative z-[0]">
          <div className="container11 py-[100px] flex flex-col gap-[40px]">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-end justify-end gap-[130px] xl:justify-center">
              <h2 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
                {t("Фотографии наших студентов")}
              </h2>

              <div className="flex items-center gap-[30px] xl:hidden">
                <p className="font-[400] text-[18px] text-[#7A7A7A] leading-[26px]">
                  {t("Истории студентов")}
                </p>
                <img src={vector12} alt="" />
              </div>
            </div>

            <div>
              <Swiper3 img={image39} />
            </div>
          </div>
          <img
            src={whitecloud1}
            className=" absolute top-0 left-0 w-[100%] h-[100%] z-[-1] dark:opacity-[40%]"
            alt=""
          />
          <div className="container11 flex flex-col gap-[40px] py-[50px] relative z-10">
            <h1 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
              {t("Вопросы и ответы")}
            </h1>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <SimpleAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="container1 py-[200px]">
        <div className="container111 relative">
          <div className="container11 flex justify-end xl:justify-center md:mx-auto">
            <div className="bg-white dark:bg-[gray] p-[12px] rounded-[20px] w-max md:max-w-[100%]">
              <form className="bg-white dark:bg-black p-[30px_48px] w-[536px] md:w-[100%]  relative rounded-[20px] h-[446px] flex flex-col gap-[21px] border-[1px] border-dashed border-[#E2EDF3]">
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[10px]">
                  <h1 className="font-[400] text-[24px] dark:text-white text-center text-[] leading-[30px]">
                    {t("Связатся с нами")}
                  </h1>
                  <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white text-center leading-[22px] max-w-[321px] mx-auto">
                    {t(
                      "Оставьте свои данные и наш специалист обязательно свяжемся с Вами в течение дня"
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <input
                    type="text"
                    className="p-[15px_0_13px_20px] w-[100%] outline-none bg-[#F8FCFF] dark:bg-[gray] rounded-[10px]"
                    name=""
                    id=""
                    placeholder={t("Ваше имя")}
                    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                  />
                  <input
                    type="text"
                    className="p-[15px_0_13px_20px] w-[100%] outline-none bg-[#F8FCFF] dark:bg-[gray] rounded-[10px]"
                    name=""
                    id=""
                    placeholder={t("+998 (___) __ - __ - __")}
                    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                  />
                  <textarea
                    name=""
                    className="p-[15px_0_13px_20px] w-[100%] min-h-[100px] max-h-[100px]  outline-none bg-[#F8FCFF] dark:bg-[gray] rounded-[10px]"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={t("Дополнительные комментарии")}
                    data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
                  ></textarea>
                </div>
                <button className="w-max absolute bottom-[-7.5%] left-[30%] sm360:left-[10%]">
                  <img src={bt} className="" alt="" />
                </button>
              </form>
            </div>
          </div>
          <img
            src={img2}
            className=" absolute top-0 left-0 w-[100%] h-[771px] z-[-1] lg770:hidden dark:opacity-[40%]"
            alt=""
          />
          <img src={bg1} className=" absolute top-0 left-0 w-[100%] h-[771px] z-[-1] hidden lg770:block" alt="" />
          <img
            src={Group15}
            className=" absolute top-[-55%] left-0 z-[-1] hidden"
            alt=""
          />
        </div>
      </section>

      <section className="container1">
        <div className="container111 relative py-[61px]">
          <div className="container11 flex flex-col gap-[66px] pb-[141px]">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" flex flex-col gap-[10px]"> 
              <h1 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">{t("Остались вопросы?")}</h1>
              <p className="font-[400] text-[18px] text-[#7A7A7A] leading-[26px] text-center">{t("Свяжитесь с нами и мы ответим на все ваши вопросы")}</p>
            </div>
            <div className="flex justify-center">
            <div className="bg-white dark:bg-black rounded-[20px] p-[12px] ">
            <div className="p-[28px_43px_40px_30px] relative rounded-[20px] border-[1px] flex flex-col gap-[11px] border-dashed border-[#E2EDF3] w-max">
              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start  gap-[10px]">
                <img src={maplocation} alt="" />
                <div className="flex flex-col gap-[3px]">
                  <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                    {t("Телефоны")}
                  </h1>
                  <div>
                    <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                      +998 (99) 878-63-99
                    </p>
                    <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                      +998 (99) 878-63-99
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start  gap-[10px]">
                <img src={maplocation2} alt="" />
                <div className="flex flex-col gap-[3px]">
                  <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                    {t("Адрес")}
                  </h1>
                  <div>
                    <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                      {t("г. Город, ул. Улица, 24 (Офис 24)")}
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start  gap-[10px]">
                <img src={maplocation3} alt="" />
                <div className="flex flex-col gap-[3px]">
                  <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                    {t("Время работы")}
                  </h1>
                  <div>
                    <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                      {t("Пн-Пт 9:00 - 18:00")}
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" absolute bottom-[-9%] left-[14%]">
                <Btn1 img={icon1} text={t("Связаться с нами")}/>
              </div>
            </div>

            </div>

            </div>
          </div>
          <img src={image55} className=" absolute w-[100%] h-[100%] left-0 top-0 z-[-2] dark:opacity-[40%]" alt="" />
          <img src={img3} className=" absolute right-0 z-[-1] bottom-0 dark:opacity-[70%]" alt="" />
          <img src={wwww} className=" absolute left-0 top-[-15%] lg770:hidden" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
