import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FaChildReaching } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

function Navbar() {
    const [togglebar, setTogglebar] = useState(false);
    const [user, setUser] = useState('')
    const navigate = useNavigate(); 
    
    const handleLogout = () => {
        localStorage.removeItem('token'); 
        setUser(null); 
        navigate('/Register'); 
    }

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
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]
                hover:2xl:shadow-[0_8px_7px_10px_rgba(200,255,202,0.5),0_20px_18px_5_rgba(200,255,202,0.5)]">
                <Link to="/" className="flex items-center pt-1 pl-5 2xl:p-6">
                <TiHomeOutline className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">Home</span>
                </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/Profile" className="flex items-center pt-1 pl-5 2xl:p-6">
                <FaChildReaching className="size-1/12 sm:size-1/6"/>
                    <span className="ms-2 2xl:ms-5">Profile</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/GoalsDay" className="flex items-center pt-1 pl-5 2xl:p-6">
                <LuListTodo className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">GoalsDay</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                    <Link to="/Calendar" className="flex items-center pt-1 pl-5 2xl:p-6">
                <IoCalendarOutline className="size-1/12 sm:size-1/6"/>
                <span className="ms-2 2xl:ms-5">Calendar</span>
                    </Link>
                </li>
                <li className="flex items-center gap-x-4 cursor-pointer p-1">
                    <Link to="/Registra" className="flex items-center pt-1 pl-6 2xl:pl-20">
                        <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`}>Register</span>
                    </Link>
                </li>
                <li className="flex items-center gap-x-4 cursor-pointer p-1">
                    <Link to="/Registra" className="flex items-center pt-1 pl-6 2xl:pl-20">
                        <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`} onClick={handleLogout}>Log out</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;