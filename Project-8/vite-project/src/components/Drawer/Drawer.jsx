import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import gamb from "../../Images/gamb.png";
import telephone from "../../Images/telephone.png";
import telephone2 from "../../Images/telephone2.png";
import icon from "../../Images/icon.png";
import image23 from "../../Images/image 23.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Switcher from "../Switcher/Switcher";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [check, setCheck] = React.useState("ru");

  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[#F8FCFF] w-[320px] h-[507px] dark:bg-black flex flex-col gap-[8px] pt-[25px]"
    >
      <List className="flex justify-center">
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
      </List>

      <Divider />

      <List>
        <ul className="font-[400] text-[14px] text-[#7A7A7A] dark:text-white leading-[13.4px] flex flex-col  items-center gap-[18px]">
          <div className=" flex flex-col">
            <Link to="/">
              <li className="text-[#52BFFF]">Главная</li>
            </Link>
            <img src={image23} className="w-[50px]" alt="" />
          </div>
          <Link to="/About">
            <li>О нас</li>
          </Link>
          <Link to="/Services">
            <li>Услуги</li>
          </Link>
          <Link to="/Universities">
            <li>Университеты</li>
          </Link>
          <Link to="/Students">
            <li>Студенты</li>
          </Link>
          <Link to="/News">
            <li>Новости</li>
          </Link>
          <Link to="/Contacts">
            <li>Контакты</li>
          </Link>
        </ul>
      </List>

      <List className="flex justify-center">
        <div className="flex items-center gap-[20px]">
          <button className="flex items-center gap-[14px] p-[5px_19px_5px_5px] bg-white rounded-[25px]">
            <img src={icon} alt="" />
            <span className="font-[700] text-[16px] text-[#52BFFF] text-center leading-[15px]">
              Оставить заявку
            </span>
          </button>
        </div>
      </List>
      <List className="flex justify-center">
        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <img src={telephone2} alt="" />
            <span className="font-[400] text-[12px] text-[#313131] dark:text-white leading-[16px]">
              {t("Пн-Пт 9:00 - 18:00")}
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={telephone} alt="" />
            <span className="font-[400] text-[12px] text-[#313131] dark:text-white leading-[16px]">
              {t("г. Город")}
            </span>
            <span className="font-[400] text-[12px] text-[#7A7A7A] leading-[16px]">
              {t("ул. Улица, 24 (Офис 24)")}
            </span>
          </div>
        </div>
      </List>

      <List className="flex items-center justify-center">
            <Switcher/>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={gamb} alt="" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
