import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import StartPage from '../pages/StartPage'
import AboutPage from "../pages/AboutPage";
import MyProjPage from "../pages/MyProjPage";
import NetWorkPage from "../pages/NetWorkPage";
import DeepNetPage from "../pages/DeepNetPage";

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/start', element: <StartPage/>},
]

export const privateRoutes = [
    {path: '/home', element: <Home/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/myproj', element: <MyProjPage/>},
    {path: '/network', element: <NetWorkPage/>},
    {path: '/deepnet', element: <DeepNetPage/>},
]