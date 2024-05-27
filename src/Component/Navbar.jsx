import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
    const [togglebar, setTogglebar] = useState(false);

    const buttonhandler = () =>{
        setTogglebar(!togglebar)
    }
    return(
        
        <aside className=" m-0 p-0">
                <button className="inline text-white md:hidden"
            onClick={buttonhandler}>
                {togglebar ? <IoCloseSharp className=" size-6 mt-3 ml-3"/> : <FaBars className=" size-6 mt-3 ml-3"/>}
            </button>
        
    <nav  className={togglebar ? "absolute bg-lime-400 h-screen w-3/4 md:inline md:w-64 2xl:w-1/5 2xl:p-24 z-50" 
            : "hidden"}>
        <ul className=" 2xl:text-7xl space-y-5">
            <li>
            <Link to="/" className="flex items-center pt-10 pl-7 2xl:p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-8 2xl:size-20">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span className="ms-2 2xl:ms-5">Home</span>
            </Link>
            </li>
            <li>
                <Link to="/Profile" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="ms-2 2xl:ms-5">Profile</span>
                </Link>
            </li>
            <li>
                <Link to="/Exercises" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg className=" size-6 md:size-8 2xl:size-20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" />
                </svg>
                <span className="ms-2 2xl:ms-5">Exercises</span>
                </Link>
            </li>
            <li>
                <Link to="/Calendar" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <span className="ms-2 2xl:ms-5">Calendar</span>
                </Link>
            </li>
            <li>
                <Link to="/Caloriecalculator" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                <span className="ms-2 2xl:ms-5">
                Calorie Calculator</span>
                </Link>
            </li>
            <li>
                <Link to="/Signup" className="flex pt-2 pl-7 2xl:pt-7">
                <span className="ms-5 2xl:p-6 2xl:h-28 w-2/4 2xl:w-3/4 rounded-full bg-zinc-400 text-center items-center drop-shadow-xl">Sign up</span>
                </Link>
            </li>
        </ul>
    </nav>
    <nav  className=" hidden md:flex bg-lime-400 h-screen w-3/4 md:w-52 2xl:w-1/5 2xl:p-24">
        <ul className=" 2xl:text-7xl space-y-5">
            <li>
            <Link to="/" className="flex items-center pt-10 pl-7 2xl:p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-8 2xl:size-20">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span className="ms-2 2xl:ms-5">Home</span>
            </Link>
            </li>
            <li>
                <Link to="/Profile" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="ms-2 2xl:ms-5">Profile</span>
                </Link>
            </li>
            <li>
                <Link to="/Exercises" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg className=" size-6 md:size-8 2xl:size-20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" />
                </svg>
                <span className="ms-2 2xl:ms-5">Exercises</span>
                </Link>
            </li>
            <li>
                <Link to="/Calendar" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <span className="ms-2 2xl:ms-5">Calendar</span>
                </Link>
            </li>
            <li>
                <Link to="/Caloriecalculator" className="flex items-center pt-2 pl-7 2xl:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 2xl:size-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                <span className="ms-2 2xl:ms-5">
                Calorie Calculator</span>
                </Link>
            </li>
            <li>
                <Link to="/Signup" className="flex pt-2 pl-7 2xl:pt-7">
                <span className="ms-5 2xl:p-6 2xl:h-28 w-2/4 md:w-4/5 2xl:w-3/4 rounded-full bg-zinc-400 text-center items-center drop-shadow-xl">Sign up</span>
                </Link>
            </li>
        </ul>
    </nav>
    
        </aside>
    );
}
export default Navbar;