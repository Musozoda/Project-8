import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Contacts, Feedback, Help, Home, Layout, Nothing, Shop } from "./Routes/Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader/Loader";
import { About, Contacts, Home, Layout, News, Nothing, Request, Services, Students, Universities, University } from "./Routes/Routes";



function App()
{

  const [t,i18n] =useTranslation("")
  const changeLanguage = (Language) =>{
    i18n.changeLanguage(Language)
  }

  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Suspense fallback={<Loader/>}>
        <Layout/>
      </Suspense>,
      children:[
        {
          index:true,
          element:<Suspense fallback={<Loader/>}>
          <Home/>
        </Suspense>,
        },

        {
          path:'About',
          element:<Suspense fallback={<Loader/>}>
          <About/>
        </Suspense>,
        },

        {
          path:'Contacts',
          element:<Suspense fallback={<Loader/>}>
          <Contacts/>
        </Suspense>,
        },
        {
          path:'News',
          element:<Suspense fallback={<Loader/>}>
          <News/>
        </Suspense>,
        },
        {
          path:'Students',
          element:<Suspense fallback={<Loader/>}>
          <Students/>
        </Suspense>,
        },
        {
          path:'*',
          element:<Suspense fallback={<Loader/>}>
          <Nothing/>
        </Suspense>,
        },
          {
          path:'Universities',
          element:<Suspense fallback={<Loader/>}>
          <Universities/>
        </Suspense>,
        },
          {
          path:'Services',
          element:<Suspense fallback={<Loader/>}>
          <Services/>
        </Suspense>,
        },
        {
          path:'University',
          element:<Suspense fallback={<Loader/>}>
          <University/>
        </Suspense>,
        },
        {
          path:'Request',
          element:<Suspense fallback={<Loader/>}>
          <Request/>
        </Suspense>,
        },
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App;
