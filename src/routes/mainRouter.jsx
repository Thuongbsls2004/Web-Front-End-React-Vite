import LoginScreen from '../pages/loginScreen.jsx'
import RegisterScreen from '../pages/registerScreen.jsx'
import ErrorPage from '../error-page.jsx'
import MainScreen from '../pages/Home/mainScreen.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import About from '../pages/Home/about.jsx'
import Settings from '../pages/Home/settings.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <MainScreen />,
  },
  {
    path: "about",
    element: <About />,
  }, 
  {
    path: "settings",
    element: <Settings />,
  },


  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "register",
    element: <RegisterScreen />
  }
   
  
])

export { router };