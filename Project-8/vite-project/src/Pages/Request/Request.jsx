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
import frame1 from "../../Images/frame 1.png";
import popular1 from "../../Images/popular 1.png";
import popular11 from "../../Images/popular 1 (1).png";
import popular12 from "../../Images/popular 1 (2).png";
import mortarboard2 from "../../Images/mortarboard 1 (2).png";
import openbook from "../../Images/open-book (3) 1.png";
import image23 from "../../Images/image 23.png";
import image55 from "../../Images/image 55.png";
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

import group19 from "../../Images/group 19.png";
import group58 from "../../Images/group 58.png";
import group61 from "../../Images/group 61.png";
import vector from "../../Images/vector.png";
import vector1 from "../../Images/vector (1).png";
import vector2 from "../../Images/vector (2).png";
import vector3 from "../../Images/vector (3).png";
import checkbox from "../../Images/checkbox.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Request = () => {

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
          <BasicBreadcrumbs text={t("Заявка на консультацию")} />
        </div>
      </section>

      <section className="container1">
        <div  className="container1111 flex flex-col gap-[40px]">
          <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="font-[700] text-[#52BFFF] text-center text-[36px] leading-[46px]">
            {t("Заявка на консультацию")}
          </h1>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[25px]">
              <div className="flex flex-col gap-[8px]">
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[16.57px] ml-[10px]">
                  <img src={group19} alt="" />
                  <h1 className="font-[400] text-[14px] text-[] leading-[20px]">
                    {t("ФИО")}
                  </h1>
                </div>
                <div  className="flex items-center gap-[30px]">
                  <div data-aos="fade-dowbn"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[440px] bg-[#F8FCFF] rounded-[10px]">
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Имя")}
                    </h1>
                  </div>
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[440px] bg-[#F8FCFF] rounded-[10px] flex items-center gap-[15px]">
                    <img src={group19} alt="" />
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Фамилия")}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[16.57px] ml-[10px]">
                  <img src={group58} alt="" />
                  <h1 className="font-[400] text-[14px] text-[] leading-[20px]">
                    {t("Дата рождения")}
                  </h1>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("День")}
                    </h1>
                  </div>

                  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Месяц")}
                    </h1>
                  </div>

                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Год")}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[16.57px] ml-[10px]">
                  <img src={vector} alt="" />
                  <h1 className="font-[400] text-[14px] text-[] leading-[20px]">
                    {t("Контактные данные")}
                  </h1>
                </div>
                <div  className="flex flex-col gap-[10px]">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] max-w-[440px] bg-[#F8FCFF] rounded-[10px]">
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Город")}
                    </h1>
                  </div>

                  <div className="flex items-center gap-[30px]">
                    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[440px] bg-[#F8FCFF] rounded-[10px]">
                      <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                        {t("+998 (___) __ - __ - __")}
                      </h1>
                    </div>

                    <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[440px] bg-[#F8FCFF] rounded-[10px]">
                      <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                        {t("E-mail")}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px] ml-[20px]">
                      <img src={vector3} alt="" />
                      <h1 className="font-[400] text-[14px] leading-[20px] text-[]">
                        {t("Уровень английского")}
                      </h1>
                </div>
                <ul className="font-[400] text-[14px] text-[#98B6C9] leading-[20px] flex flex-col gap-[10px]">
                    <li data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Начинающий (А1 - А2)")}
                        </h1>
                    </li>
                    <li data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Средний (B1 - B2)")}
                        </h1>
                    </li>
                    <li data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Продвинутый (C1 - C2)")}
                        </h1>
                    </li>
                </ul>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px] ml-[20px]">
                      <img src={vector2} alt="" />
                      <h1 className="font-[400] text-[14px] leading-[20px] text-[]">
                        {t("Предпочтительная программа")}
                      </h1>
                </div>
                <ul className="font-[400] text-[14px] text-[#98B6C9] leading-[20px] flex flex-col gap-[10px]">
                    <li data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Бакалавр")}
                        </h1>
                    </li>
                    <li data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Foundation")}
                        </h1>
                    </li>
                    <li data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                        <img src={checkbox} alt="" />
                        <h1>
                            {t("Магистр")}
                        </h1>
                    </li>
                </ul>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[16.57px] ml-[10px]">
                  <img src={group61} alt="" />
                  <h1 className="font-[400] text-[14px] text-[] leading-[20px]">
                    {t("Предпочтительная дата начала")}
                  </h1>
                </div>
                <div className="flex flex-col gap-[10px]">


                  <div  className="flex items-center gap-[10px]">
                    <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                      <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                        {t("День")}
                      </h1>
                    </div>

                    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                      <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                        {t("Месяц")}
                      </h1>
                    </div>

                    <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="p-[14px_20px] w-[140px] bg-[#F8FCFF] rounded-[10px]">
                      <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                        {t("Год")}
                      </h1>
                    </div>
                  </div>


                  <div className="p-[14px_20px] max-w-[440px] bg-[#F8FCFF] rounded-[10px] flex items-start h-[100px]">
                      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px]">
                      <img src={vector1} alt="" />
                    <h1 className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Дополнительные комментарии")}
                    </h1>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <button data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-max mx-auto">
                <img src={bt} alt="" />
            </button>
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
                    data-aos="fade-up"
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
                    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                  ></textarea>
                </div>
                <button data-aos="fade-up"
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

export default Request;
