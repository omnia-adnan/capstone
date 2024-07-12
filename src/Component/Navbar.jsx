import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FaChildReaching } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

function Navbar() {
    const [togglebar, setTogglebar] = useState(false);

    // const { user, setUser } = useContext(AuthContext);

    
    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     setUser(null);
    // };
    
    // const logout = () => {
    //     window.localStorage.clear();
    //     window.location.href = "/Registra";
    // }

    return(
        <div>
            <span className=" sm:hidden flex bg-lime-400 z-40 text-2xl text-blue-950 font-bold cursor-pointer px-2">
                GrowStrong
            </span>
            <div onClick={() => setTogglebar(!togglebar)} className=" absolute right-2 top-1.5 sm:hidden">
            {togglebar ? <IoCloseOutline className="size-6"/> : <HiMiniBars3BottomRight className="size-6"/>}             
            </div>
        <nav id="nav" className={` duration-500 ease-in ${togglebar ? 'bg-lime-400 w-full p-3 pt-0 text-base' 
            :' hidden sm:flex rounded-lg 2xl:rounded-3xl bg-lime-400 h-[calc(100%_-_2rem)] mx-4 mt-4 w-[20%] 2xl:w-[15%] 2xl:p-16 2xl:mx-36 2xl:mt-28 2xl:h-[calc(100%_-_12rem)]'}`}>
            
            <ul className=" 2xl:text-6xl space-y-5 pt-5 sm:pt-11">
                <span className=" hidden sm:flex justify-center text-xl 2xl:text-8xl text-blue-950 2xl:pb-12 font-bold">
                    GrowStrong
                </span>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-1/12 sm:size-1/6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg> */}
                <TiHomeOutline className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">Home</span>
                </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/Profile" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-1/12 sm:size-1/6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg> */}
                <FaChildReaching className="size-1/12 sm:size-1/6"/>
                    <span className="ms-2 2xl:ms-5">Profile</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/GoalsDay" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <svg className=" flex-shrink-0 size-1/12 sm:size-1/6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" />
                </svg> */}
                <LuListTodo className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">GoalsDay</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                    <Link to="/Calendar" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-1/12 sm:size-1/6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg> */}
                <IoCalendarOutline className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">Calendar</span>
                    </Link>
                </li>
                <li className="flex items-center gap-x-4 cursor-pointer p-1">
                    <Link to="/Registra" className="flex items-center pt-1 pl-6 2xl:pl-20">
                        <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`}>Registra</span>
                    </Link>
                </li>
                {/* <li className="flex items-center gap-x-4 cursor-pointer p-1">
                    <Link to="/Registra" className="flex items-center pt-1 pl-6 2xl:pl-20">
                        <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`} onClick={logout}>Log out</span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;