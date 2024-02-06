import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Search from "../features/search/components/Search";
// import {useEffect} from "react";
// import {useDispatch} from "react-redux";
// import {verifyUser} from "../features/authentication/context/LoginActions";
//import {useCookies} from "react-cookie";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setOpenMenu(false)
    }, [location.pathname]);



    return <header className={'border-b-2'}>
        <div className={'container mx-auto relative'}>
            <div className={'flex justify-between py-4 items-center max-md:px-3'}>
                <div className={'flex mr-2'}>
                <button className={'max-lg:block hidden'} onClick={() => {
                    setOpenMenu(true)
                }}>
                    <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>


                <div className={'font-bold max-lg:basis-1/3 max-lg:items-start max-lg:ml-10'}>LOGO</div>
                </div>
                <ul className={`flex z-10 max-lg:fixed max-lg:flex-col max-lg:top-0 max-lg:left-0 max-lg:bg-gray-50 max-lg:h-full max-lg:items-center max-md:w-3/4 max-lg:w-1/2 max-lg:justify-evenly max-lg:p-10 max-lg:shadow-lg duration-200 ease-in ${openMenu ? 'max-lg:translate-x-[0%]' : 'max-lg:translate-x-[-100%]'}`}>
                    <button className={'absolute top-5 right-5 lg:hidden'} onClick={() => setOpenMenu(false)}>
                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                    <li><NavLink to={'/'} className={'p-5 w-full'}>Головна</NavLink></li>
                    <li><NavLink to={'/contact'} className={'p-5 w-full'}>Контакти</NavLink></li>
                    <li><NavLink to={'/about'} className={'p-5 w-full'}>Про нас</NavLink></li>
                    <li><NavLink to={'/signup'} className={'p-5 w-full'}>Реєстрація</NavLink></li>
                </ul>
                <div className={'flex flex-row items-center gap-4'}>


                    <div className={'flex gap-4 items-center'}>

                        <Search/>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                        </svg>

                        <NavLink to={'/cart'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                        </NavLink>

                        <NavLink to={'/account'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Navbar;