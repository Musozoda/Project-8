import { lazy } from "react";


export const Layout = lazy(()=>import("../Layout/Layout"))
export const Home = lazy(()=>import("../Pages/Home/Home"))
export const About = lazy(()=>import("../Pages/About/About"))
export const Contacts = lazy(()=>import("../Pages/Contacts/Contacts"))
export const News = lazy(()=>import("../Pages/News/News"))
export const Services = lazy(()=>import("../Pages/Services/Services"))
export const Students = lazy(()=>import("../Pages/Students/Students"))
export const Universities = lazy(()=>import("../Pages/Universities/Universities"))
export const Nothing = lazy(()=>import("../Pages/Nothing/Nothing"))
export const University = lazy(()=>import("../Pages/University/University"))
export const Request = lazy(()=>import("../Pages/Request/Request"))