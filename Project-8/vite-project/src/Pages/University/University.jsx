import React, { useEffect, useState } from "react";
import Group1698 from "../../Images/Group 1698.png";
import Group15 from "../../Images/Group 15 1.png";
import flag21 from "../../Images/flag (2) 1.png";
import inst from "../../Images/inst.png";
import maplocation from "../../Images/map-location 1.png";
import maplocation2 from "../../Images/map-location 1 (1).png";
import maplocation3 from "../../Images/map-location 1 (2).png";
import fb from "../../Images/fb.png";
import wwww from "../../Images/wwww.png";
import hover from "../../Images/hover.png";
import icon from "../../Images/icon.png";
import icon1 from "../../Images/icon (1).png";
import bt from "../../Images/bt.png";
import off from "../../Images/off.png";
import bg1 from "../../Images/bg (1).png";
import icon3 from "../../Images/icon (3).png";
import icon4 from "../../Images/icon (4).png";
import ph from "../../Images/ph.png";
import on from "../../Images/on.png";
import image36 from "../../Images/image 36.png";
import frame1 from "../../Images/frame 1.png";
import popular1 from "../../Images/popular 1.png";
import popular11 from "../../Images/popular 1 (1).png";
import popular12 from "../../Images/popular 1 (2).png";
import mortarboard2 from "../../Images/mortarboard 1 (2).png";
import openbook from "../../Images/open-book (3) 1.png";
import tick from "../../Images/tick (3) 1.png";
import image23 from "../../Images/image 23.png";
import image55 from "../../Images/image 55.png";
import image351 from "../../Images/image 35 (1).png";
import img12 from "../../Images/img12.png";
import img2 from "../../Images/img (2).png";
import img3 from "../../Images/img (3).png";
import vector12 from "../../Images/vector 12.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TemporaryDrawer from "../../components/Drawer/Drawer";
import BasicBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Btn1 from "../../components/Btn1/Btn1";
import img5 from "../../Images/img (5).png";
import mortarboard11 from "../../Images/mortarboard 1 (1).png";
import HalfRating from "../../components/Rating/Rating";
import bt1 from "../../Images/bt (1).png";
import SimpleAccordion2 from "../../components/Accordion2/Accordion2";
import Swiper4 from "../../components/Swiper4/Swiper4";
import AOS from "aos";
import "aos/dist/aos.css";

const University = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [check, setCheck] = useState("ru");
  return (
    <div className="dark:bg-black relative z-[0]">
      <header className="container1">
        <div className="container111 shadow-[0_0_25px_0] shadow-[#0000000D]">
          <div className="container11">
            <nav className="flex items-center justify-between p-[18px_0_29px_0] ">
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

              <ul className="font-[400] xl:hidden text-[14px] text-[#7A7A7A] dark:text-white leading-[13.4px] flex items-center gap-[18px]">
                <Link to="/">
                  <li>{t("Главная")}</li>
                </Link>
                <Link to="/About">
                  <li>{t("О нас")}</li>
                </Link>
                <Link to="/Services">
                  <li>{t("Услуги")}</li>
                </Link>
                <div className=" flex flex-col">
                  <Link to="/Universities">
                    <li className="text-[#52BFFF]">{t("Университеты")}</li>
                  </Link>
                  <img src={image23} className="w-[50px]" alt="" />
                </div>

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
                      className="font-[400] text-[12px] text-[#7A7A7A] dark:text-white leading-[11px]"
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
                      className="font-[400] text-[12px] text-[#7A7A7A] dark:text-white leading-[11px]"
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
                <TemporaryDrawer />
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="container1">
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container11 py-[25px]">
          <BasicBreadcrumbs
            text={t("Название университета")}
            linktext="/Universities"
            text2="Университеты"
          />
        </div>
      </section>

      <section className="container1">
        <div className="container11">
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[71px]">
              <h1 data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
                {t("Название университета")}
              </h1>
              <div className="flex items-center justify-between xl:flex-wrap xl:justify-center ">
                <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={image351} alt="" />
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" rounded-[20px] p-[12px] shadow-[0_0_40px_0] shadow-[#77CDFF4D] w-max bg-white xl:mt-[-50px] ">
                  <div className="max-w-[341px] relative rounded-[20px] border-dashed border-[1px] border-[#E2EDF3] w-[343px]">
                    <div className="p-[17px_14px] flex items-center gap-[34px] bg-[#F8FCFF] h-[48px] ">
                      <span className="font-[400] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("Расположение")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px]">
                        {t("США, Флорида")}
                      </p>
                    </div>

                    <div className="p-[17px_14px] flex items-center gap-[34px]  h-[48px] ">
                      <span className="font-[400] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("Язык обучения")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px]">
                        {t("Английский")}
                      </p>
                    </div>

                    <div className="p-[17px_14px] flex items-center gap-[34px] bg-[#F8FCFF] h-[48px] ">
                      <span className="font-[400] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("Год основания")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px] ">
                        {t("1990")}
                      </p>
                    </div>

                    <div className="p-[17px_14px] flex items-center gap-[34px]  h-[48px] ">
                      <span className="font-[400] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("К-во студентов")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px]">
                        {t("10 000")}
                      </p>
                    </div>

                    <div className="p-[17px_14px] flex items-center gap-[0px] bg-[#F8FCFF] h-[48px] ">
                      <span className="font-[400] max-w-[114px] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("Средняя цена за семестр")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px] ">
                        {t("10 000 грн")}
                      </p>
                    </div>

                    <div className="p-[17px_14px] flex items-center gap-[0px]  h-[48px] ">
                      <span className="font-[400] max-w-[114px] text-[12px] text-[#98B6C9] leading-[20px]">
                        {t("Средняя цена за проживание")}
                      </span>
                      <p className="font-[400] text-[14px] text-[] leading-[13px]">
                        {t("10 000 грн")}
                      </p>
                    </div>
                    <div className=" absolute bottom-[-12%] left-[20%]">
                      <Btn1 img={icon1} text={t("Связаться с нами")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[60px]">
              <div className="flex items-start gap-[47px] xl:flex-wrap xl:justify-center xl:gap-[25px]">
                <div className="max-w-[753px] flex flex-col gap-[10px]">
                  <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[400] text-[24px] text-[] leading-[30px]">
                    {t("О ВУЗе")}
                  </h3>
                  <div className="font-[400] text-[14px] text-[#7A7A7A] leading-[22px] flex flex-col gap-[20px]">
                    <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      )}
                    </p>

                    <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                      )}
                    </p>
                    <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                      )}
                    </p>

                    <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                      {t(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                      )}
                    </p>
                  </div>
                </div>
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[15px]">
                  <h1 className="font-[400] text-[24px] max-w-[270px] mx-auto text-center leading-[30px]">
                    {t("Документы для поступления")}
                  </h1>
                  <ul className="font-[400] text-[14px] text-[#7A7A7A] leading-[22px] flex flex-col gap-[8px]">
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                    <li className="flex items-center gap-[8px]">
                      <img src={tick} alt="" />
                      {t("Название документа")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[400] text-[24px] leading-[30px]">
                  {t("Академические программы")}
                </h1>

                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                  <SimpleAccordion2 />
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[400] text-[24px] text-[] leading-[30px]">
                  {t("Галерея")}
                </h1>
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                  <Swiper4 img={image36} />
                </div>
              </div>
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
                    data-aos="fade-up"
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
                <button data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-max absolute bottom-[-7.5%] left-[30%] sm360:left-[10%]">
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
          <img
            src={bg1}
            className=" absolute top-0 left-0 w-[100%] h-[771px] z-[-1] hidden lg770:block"
            alt=""
          />
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
              <h1 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
                {t("Остались вопросы?")}
              </h1>
              <p className="font-[400] text-[18px] text-[#7A7A7A] leading-[26px] text-center">
                {t("Свяжитесь с нами и мы ответим на все ваши вопросы")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-black rounded-[20px] p-[12px] ">
                <div className="p-[28px_43px_40px_30px] relative rounded-[20px] border-[1px] flex flex-col gap-[11px] border-dashed border-[#E2EDF3] w-max">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start  gap-[10px]">
                    <img src={maplocation} alt="" />
                    <div  className="flex flex-col gap-[3px]">
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
                    <Btn1 img={icon1} text="Связаться с нами" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={image55}
            className=" absolute w-[100%] h-[100%] left-0 top-0 z-[-2] dark:opacity-[40%]"
            alt=""
          />
          <img
            src={img3}
            className=" absolute right-0 z-[-1] bottom-0 dark:opacity-[70%]"
            alt=""
          />
          <img
            src={wwww}
            className=" absolute left-0 top-[-15%] lg770:hidden"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default University;
