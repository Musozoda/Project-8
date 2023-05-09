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
import AOS from "aos";
import "aos/dist/aos.css";

const Universities = () => {

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
          <BasicBreadcrumbs text={t("Университеты")} />
        </div>
      </section>

      <section className="container1">
        <div className="container11 flex flex-col gap-[40.5px]">
          <h1 data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-center font-[700] text-[36px] text-[#52BFFF] leading-[46px]">
            {t("Университеты")}
          </h1>
          <div className="flex gap-[20px] items-start">
            <div className="max-w-[270px] flex flex-col gap-[17px] xl:hidden">
              <h1 data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-center font-[400] text-[24px] text-[] leading-[30px]">
                {t("Фильтры")}
              </h1>
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[11px]">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px]">
                    <img src={flag21} alt="" />
                    <h1 className=" font-[400] text-[14px] text-[] leading-[13px]">
                      {t("Страны")}
                    </h1>
                  </div>
                  <ul data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[10px] font-[400] text-[#7A7A7A] text-[14px] leading-[22px]">
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={on} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Страны")}
                    </li>
                  </ul>
                </div>
                <div className="w-[140px] bg-[#E2EDF380] h-[1px] mx-auto"></div>
                <div className="flex flex-col gap-[11px]">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px]">
                    <img src={mortarboard2} alt="" />
                    <h1 className=" font-[400] text-[14px] text-[] leading-[13px]">
                      {t("Форма обучения")}
                    </h1>
                  </div>
                  <ul data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[10px] font-[400] text-[#7A7A7A] text-[14px] leading-[22px]">
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Бакалавриат")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Магистратура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={on} alt="" />
                      {t("Докторантура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Подготовка к университету")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Языковые курсы")}
                    </li>
                  </ul>
                </div>
                <div  className="w-[140px] bg-[#E2EDF380] h-[1px] mx-auto"></div>
                <div className="flex flex-col gap-[11px]">
                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[15px]">
                    <img src={openbook} alt="" />
                    <h1 className=" font-[400] text-[14px] text-[] leading-[13px]">
                      {t("Направление обучения")}
                    </h1>
                  </div>
                  <ul data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[10px] font-[400] text-[#7A7A7A] text-[14px] leading-[22px]">
                    <li className="flex items-center gap-[15px]">
                      <img src={on} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Языковые курсы")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <img src={off} alt="" />
                      {t("Архитектура")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex items-center justify-between md650:flex-wrap md650:justify-center md650:gap-[20px]">
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[367px] bg-[#F8FCFF] rounded-[10px]">
                  <div className="flex items-center gap-[15px] p-[15px_20px]">
                    <img src={frame1} alt="" />
                    <span className="font-[400] text-[14px] text-[#98B6C9] leading-[20px]">
                      {t("Поиск")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[25px] sm360:flex-col">
                  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                    <img src={popular1} alt="" />
                    <span className="font-[400] text-[14px] text-[#7A7A7A] leading-[13px]">
                      {t("По популярности")}
                    </span>
                  </div>

                  <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                    <img src={popular11} alt="" />
                    <span className="font-[400] text-[14px] text-[#7A7A7A] leading-[13px]">
                      {t("По цене")}
                    </span>
                  </div>

                  <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[10px]">
                    <img src={popular12} alt="" />
                    <span className="font-[400] text-[14px] text-[#7A7A7A] leading-[13px]">
                      {t("По цене")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] shadow-[0_0_25px_0] shadow-[#0000000D] p-[12px_50px_12px_12px] md:p-[12px] rounded-[20px] lg820:flex-col">
                  <img data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" src={img5} alt="" />
                  <div className="flex gap-[80px] md650:gap-[30px] md650:flex-col">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[6px]">
                        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" md650:text-center">
                          {t("Название университета")}
                        </h1>
                        <div className="flex items-start gap-[38px] sm360:flex-col">
                          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                            <img src={mortarboard2} alt="" />
                            <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                              <span>{t("Бакалавриат")}</span>
                              <span>{t("Магистратура")}</span>
                            </div>
                          </div>
                          <div  className="flex items-start gap-[21px]">
                            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <img src={openbook} alt="" />
                              <div className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                              </div>
                            </div>
                            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-start gap-[12px]">
                              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col gap-[2px] font-[400] text-[12px] text-[#7A7A7A] leading-[20px]">
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <span>{t("Архитектура")}</span>
                                <Link to="/University">
                                  <span className="text-[#52BFFF]">
                                    {t("Еще 30 ...")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[28px] md650:justify-center">
                        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center gap-[12px]">
                          <img src={flag21} alt="" />
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                          <p className="font-[400] text-[12px] text-[] leading-[20px]">
                            {t("Москва, ")}
                            <span className="text-[#7A7A7A]">
                              {t("Россия")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" md650:justify-center flex">
                      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-[106px] flex flex-col items-center gap-[46px]">
                        <HalfRating />
                        <div className="flex flex-col items-center">
                          <h1 className="font-[700] text-[20px] text-center text-[#52BFFF] leading-[24px]">
                            <span className="font-[400] text-[14px] text-[] leading-[24px]">
                              {t("от")}
                            </span>
                            {t(" 3 000 €")}
                          </h1>
                          <span className="font-[400] text-center text-[12px] text-[] leading-[20px]">
                            {t("за семестр")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button  className="w-max mx-auto">
                  <img src={bt1} alt="" />
                </button>
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
                <div className="flex flex-col gap-[10px]">
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
                  />
                  <input
                    type="text"
                    className="p-[15px_0_13px_20px] w-[100%] outline-none bg-[#F8FCFF] dark:bg-[gray] rounded-[10px]"
                    name=""
                    id=""
                    placeholder={t("+998 (___) __ - __ - __")}
                  />
                  <textarea
                    name=""
                    className="p-[15px_0_13px_20px] w-[100%] min-h-[100px] max-h-[100px]  outline-none bg-[#F8FCFF] dark:bg-[gray] rounded-[10px]"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={t("Дополнительные комментарии")}
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
            <div className=" flex flex-col gap-[10px]">
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
                  <div className="flex items-start  gap-[10px]">
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

                  <div className="flex items-start  gap-[10px]">
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

                  <div className="flex items-start  gap-[10px]">
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
                  <div className=" absolute bottom-[-9%] left-[14%]">
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

export default Universities;
