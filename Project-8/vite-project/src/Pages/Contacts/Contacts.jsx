import React, { useEffect, useState } from "react";
import Group1698 from "../../Images/Group 1698.png";
import inst from "../../Images/inst.png";
import fb from "../../Images/fb.png";
import hover from "../../Images/hover.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image23 from "../../Images/image 23.png";
import icon from "../../Images/icon.png";
import TemporaryDrawer from "../../components/Drawer/Drawer";
import BasicBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import maplocation from "../../Images/map-location 1.png";
import maplocation2 from "../../Images/map-location 1 (1).png";
import maplocation3 from "../../Images/map-location 1 (2).png";
import maplocation13 from "../../Images/map-location 1 (3).png";
import Btn1 from "../../components/Btn1/Btn1";
import icon1 from "../../Images/icon (1).png";
import image55 from "../../Images/image 55.png";
import wwww from "../../Images/wwww.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {

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
                <div className=" flex flex-col">
                  <Link to="/Contacts">
                    <li className="text-[#52BFFF]">{t("Контакты")}</li>
                  </Link>
                  <img src={image23} className="w-[50px]" alt="" />
                </div>
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
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="container11 py-[25px]">
          <BasicBreadcrumbs text={t("Контакты")} />
        </div>
      </section>

      <section className="container1">
      <div className="container111 relative py-[61px]">
        <div className="container11 flex flex-col gap-[66px]">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" flex flex-col gap-[10px]">
            <h1 className="font-[700] text-[36px] text-[#52BFFF] text-center leading-[46px]">
              {t("Контакты")}
            </h1>
            <p className="font-[400] text-[18px] text-[#7A7A7A] leading-[26px] text-center">
              {t("Свяжитесь с нами и мы ответим на все ваши вопросы")}
            </p>
          </div>

          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-start">
            <div className="bg-white dark:bg-black rounded-[20px] p-[12px]">
              <div  className="p-[28px_43px_40px_30px] relative rounded-[20px] border-[1px] flex flex-col gap-[11px] border-dashed border-[#E2EDF3] w-[367px] ">

                <div className="flex items-start  gap-[10px]">
                  <img src={maplocation13} alt="" />
                  <div className="flex flex-col gap-[3px]">
                    <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                      {t("г. Город")}
                    </h1>
                    <div>
                      <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                        {t("ул. Улица, 24 (Офис 24)")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start  gap-[10px]">
                  <img src={maplocation13} alt="" />
                  <div className="flex flex-col gap-[3px]">
                    <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                      {t("г. Город")}
                    </h1>
                    <div>
                      <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                        {t("ул. Улица, 24 (Офис 24)")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start  gap-[10px]">
                  <img src={maplocation13} alt="" />
                  <div className="flex flex-col gap-[3px]">
                    <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                      {t("г. Город")}
                    </h1>
                    <div>
                      <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                        {t("ул. Улица, 24 (Офис 24)")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start  gap-[10px]">
                  <img src={maplocation13} alt="" />
                  <div className="flex flex-col gap-[3px]">
                    <h1 className="font-[400] dark:text-white text-[16px] text-[] leading-[24px]">
                      {t("г. Город")}
                    </h1>
                    <div>
                      <p className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[22px]">
                        {t("ул. Улица, 24 (Офис 24)")}
                      </p>
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-center">
            <div className="bg-white dark:bg-black rounded-[20px] p-[12px]">
              <div className="p-[28px_43px_40px_30px] relative rounded-[20px] border-[1px] flex flex-col gap-[11px] border-dashed border-[#E2EDF3] w-[367px] h-[228px]">
                <div className="flex items-start gap-[10px] ">
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
                <div className=" absolute bottom-[-12%] left-[20%] w-max">
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
          src={wwww}
          className=" absolute left-0 top-[-10%] lg770:hidden"
          alt=""
        />
      </div>
    </section>
    </div>
  );
};

export default Contacts;
