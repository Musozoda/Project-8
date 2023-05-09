import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import group1699 from "../Images/group 1699.png";
import group1700 from "../Images/group 1700.png";
import image23 from "../Images/image 23.png";
import inst1 from "../Images/inst (1).png";
import fb1 from "../Images/fb (1).png";
import hover1 from "../Images/hover (1).png";
import telephonecall from "../Images/telephone-call 1.png";
import telephonecall1 from "../Images/telephone-call 1 (1).png";

const Layout = () => {
  const [t, i18n] = useTranslation("");

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  return (
    <div className="">
      {/* <nav>

        </nav> */}
      <Outlet />

      <footer className="container1 dark:bg-black dark:text-white">
        <div className="container11 p-[12px] ">
        <div className="py-[42px] flex flex-col gap-[10px]">
        <div className=" flex items-center justify-between">
        <div className="flex items-center gap-[90px]">
        <img src={group1699} alt="" />
          <ul className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[13.4px] lg:hidden flex items-center gap-[18px]">
              <Link to="/">
                <li className="">Главная</li>
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
        </div>
          <div className="flex items-center gap-[25px]">
            <img src={inst1} alt="" />
            <img src={fb1} alt="" />
            <img src={hover1} alt="" />
          </div>
        </div>
        <div className="w-[100%] h-[1px]  bg-[#E2EDF380] my-[10px]"></div>
        <div className="flex items-center justify-between lg:hidden">
          <img src={group1700} alt="" />
          <div className="flex items-center gap-[35px]">
            <div className="flex items-center gap-[15px]">
              <img src={telephonecall} alt="" />
              <div className="flex items-center gap-[8px]">
                <h1 className="font-[400] text-[15px] text-[] leading-[14px]">
                +998 (99) 878-63-99
                </h1>
                <h1 className="font-[400] text-[15px] text-[] leading-[14px]">
                +998 (99) 878-63-99
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-[15px]">
              <img src={telephonecall1} alt="" />
              <div className="flex items-center gap-[8px]">
                <h1 className="font-[400] text-[15px] text-[] leading-[14px]">
                +998 (99) 878-63-99
                </h1>

              </div>
            </div>

            <div className="flex items-center gap-[15px]">
              <img src={telephonecall} alt="" />
              <div className="flex items-center gap-[8px]">
                <h1 className="font-[400] text-[15px] text-[] leading-[14px]">
                {t("г. Город")}
                </h1>
                <h1 className="font-[400] text-[15px] text-[#7A7A7A] dark:text-white leading-[14px]">
                {t("ул. Улица, 24 (Офис 24)")}
                </h1>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
