import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import home from '../../Images/home 1.png'

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs(props) {
  const [t, i18n] = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
            <h1 className="flex items-center gap-[10px] font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
            <img src={home} alt="" />
          {t("Главная")}
            </h1>
        </Link>
        <Link underline="hover" color="inherit" to={props.linktext}>
            <h1 className="flex items-center gap-[10px] font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                {props.text2}
            </h1>
        </Link>
        <Typography color="text.primary" className="font-[400] text-[14px] text-[] leading-[13px] dark:text-white">{props.text}</Typography>
      </Breadcrumbs>
    </div>
  );
}
