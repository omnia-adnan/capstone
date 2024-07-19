import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
// import { TiHomeOutline } from "react-icons/ti";
// import { FaChildReaching } from "react-icons/fa6";
// import { LuListTodo } from "react-icons/lu";
// import { IoCalendarOutline } from "react-icons/io5";
import img from "../Images/elephant.webp"


function Navbar() {
    const [togglebar, setTogglebar] = useState(false);
    // const [user, setUser] = useState('')
    // const navigate = useNavigate(); 
    
    // const handleLogout = () => {
    //     localStorage.removeItem('token'); 
    //     setUser(null); 
    //     navigate('/Register'); 
    // }

    return(
        <div>
            <span className=" sm:hidden flex bg-lime-400 z-40 text-xl text-blue-950 font-bold">
                <div className="ml-1">
                GrowStrong
                </div>
                <div className="size-7 mt-1"><img src={img} alt="GrowStrong" /></div>
            </span>
            <div onClick={() => setTogglebar(!togglebar)} className=" absolute right-2 top-1.5 sm:hidden">
            {togglebar ? <IoCloseOutline className="size-6"/> : <HiMiniBars3BottomRight className="size-6"/>}             
            </div>
        <nav id="nav" className={` duration-500 ease-in ${togglebar ? 'bg-lime-400 w-full p-3 pt-0 text-base' 
            :' hidden sm:flex rounded-lg 2xl:rounded-3xl bg-lime-400 h-[calc(100%_-_2rem)] mx-4 mt-4 w-[20%] 2xl:w-[15%] 2xl:p-16 2xl:mx-36 2xl:mt-28 2xl:h-[calc(100%_-_12rem)]'}`}>
            
            <ul className=" 2xl:text-6xl space-y-5 pt-5 sm:pt-11">
                <span className=" hidden sm:flex justify-center text-xl lg:text-2xl 2xl:text-8xl text-blue-950 2xl:pb-12 font-bold">
                    GrowStrong
                    <div className="size-7 2xl:size-32 2xl:ml-0"><img src={img} alt="GrowStrong" /></div>
                </span>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]
                hover:2xl:shadow-[0_8px_7px_10px_rgba(200,255,202,0.5),0_20px_18px_5_rgba(200,255,202,0.5)]">
                <Link to="/" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <TiHomeOutline className="size-1/12 sm:size-1/6"/> */}
                <div className="size-1/12 sm:size-1/5"><img src="https://cdn.pixabay.com/photo/2023/05/28/14/11/tree-house-8023784_1280.png" alt="" /></div>
                <span className="ms-2 2xl:ms-5">Home</span>
                </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/Profile" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <FaChildReaching className="size-1/12 sm:size-1/6"/> */}
                <div className="size-1/12 sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2022/02/28/20/42/rabbit-7040066_960_720.png" alt="" /></div>
                <span className="ms-2 2xl:ms-5">Profile</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                <Link to="/GoalsDay" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <LuListTodo className="size-1/12 sm:size-1/6"/> */}
                <div className="size-1/12 sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2023/04/12/01/47/cartoon-7918608_1280.png" alt="" /></div>
                <span className="ms-2 2xl:ms-5">GoalsDay</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]">
                    <Link to="/Calendar" className="flex items-center pt-1 pl-5 2xl:p-6">
                {/* <IoCalendarOutline className="size-1/12 sm:size-1/6"/> */}
                <div className="size-1/12 sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2013/07/13/12/04/calendar-159098_1280.png" alt="" /></div>
                <span className="ms-2 2xl:ms-5">Calendar</span>
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]
                border-2 border-black w-1/2 sm:w-11/12 2xl:w-auto sm:ml-2">
                    <Link to="/Registra" className="flex items-center pt-1 pl-5 2xl:p-6 2xl:mx-32">
                        <div className="size-[7%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2014/04/03/00/33/hand-308667_1280.png" alt="" /></div>
                        <span className="ms-2 2xl:ms-5"> Sign Up</span>
                                        {/* <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`}>Register</span> */}
                    </Link>
                </li>
                <li className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]
                border-2 border-black w-1/2 sm:w-11/12 2xl:w-auto sm:ml-2">
                    <Link to="/Login" className="flex items-center pt-1 pl-5 2xl:p-6 2xl:mx-32">
                        <span className="ms-2 2xl:ms-5">Login </span>
                        <div className="size-[7%] sm:size-1/5"><img src="https://cdn.pixabay.com/photo/2016/03/31/21/55/hand-1296726_1280.png" alt="" /></div>
                        {/* <span className={`w-28 rounded-full bg-gray-300 hover:bg-blue-950 hover:text-blue-100 text-center items-center drop-shadow-xl 2xl:w-96 2xl:h-24 2xl:pt-4`}>Log in</span> */}
                    </Link>
                </li>
                <button className="uppercase rounded-full hover:w-11/12 hover:mr-auto 
                hover:ml-auto transition duration-150 ease-in-out hover:bg-blue-950
                hover:text-blue-100 hover:shadow-[0_2px_1px_1px_rgba(200,255,202,0.5),0_4px_18px_0_rgba(200,255,202,0.5)]
                border-2 border-black w-1/2 sm:w-11/12 2xl:w-auto sm:ml-2" type="button">Log out</button>
                <Link to="/WelcomePage"></Link>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;