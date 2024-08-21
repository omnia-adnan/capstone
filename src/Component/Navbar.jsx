import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from '../Images/logo-the-capston.png';
import { useAuth } from "./ContextApi";

function Navbar() {
    const { setUser, isLoggedIn, setIsLoggedIn } = useAuth();
    const [togglebar, setTogglebar] = useState(false);
    const navigate = useNavigate();

    const handleClickAway = () => {
        setTogglebar(false);
    };

    const handleLogout = () => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            localStorage.removeItem('ageGroupId');
            setUser(null);
            setIsLoggedIn(false);
            navigate('/');
    };

    return (
        <div>
            <span className="sm:hidden flex bg-lime-400 z-40 text-blue-900">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[38%] object-cover p-1" />
                </Link>
            </span>
            <div onClick={() => setTogglebar(!togglebar)} className="absolute right-1.5 top-1.5 sm:hidden">
                {togglebar ? <MdClose className="size-[1.8em] text-blue-900 font-bold"/> : <FiMenu className="size-[1.8em] text-blue-900 font-bold"/>}
            </div>

            <nav id="nav" onClick={handleClickAway} className={`duration-500 ease-in ${togglebar ? 'bg-lime-400 w-full p-3 pt-0 z-40 text-base absolute' : 'hidden sm:flex rounded-xl xl:rounded-5xl bg-lime-400 h-[calc(100vh_-_2rem)] mx-4 xl:mx-8 mt-4 xl:mt-5 w-[22%] xl:w-[20%] p-6'}`}>
                <ul>
                    <span className="hidden sm:flex justify-center">
                        <Link to="/">
                            <img src={logo} alt="logo" className="object-cover"/>
                        </Link>
                    </span>
                    <li>
                        <Link to="/" className="flex items-center text-xl xl:text-2xl mt-4 text-violet-950">
                            <div className="size-[10%] sm:size-[25%] lg:size-[20%]">
                                <img src="https://cdn.pixabay.com/photo/2023/01/17/02/41/house-7723639_1280.png" alt="" />
                            </div>
                            <span className="pl-[4%] hover:font-extrabold hover:text-lime-50 duration-500 ease-in-out">Home</span>
                        </Link>
                    </li>
                    
                    {isLoggedIn ? 
                        <>
                        <li>
                            <Link to="/Profile" className="flex items-center text-xl xl:text-2xl mt-4 text-violet-950">
                                <div className="size-[10%] sm:size-[25%] lg:size-[20%]">
                                    <img src="https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681_1280.png" alt="" />
                                </div>
                                <span className="pl-[4%] hover:font-extrabold hover:text-lime-50 duration-500 ease-in-out">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/GoalsDay" className="flex items-center text-xl xl:text-2xl mt-4 text-violet-950">
                                <div className="size-[10%] sm:size-[25%] lg:size-[15%]">
                                    <img src="https://cdn.pixabay.com/photo/2016/09/12/03/18/mushrooms-1662959_960_720.png" alt="" />
                                </div>
                                <span className="pl-[4%] hover:font-extrabold hover:text-lime-50 duration-500 ease-in-out">GoalsDay</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Calendar" className="flex items-center text-xl xl:text-2xl mt-4 text-violet-950">
                                <div className="size-[10%] sm:size-[25%] lg:size-[15%]">
                                    <img src="https://cdn.pixabay.com/photo/2013/03/30/00/10/calendar-97868_1280.png" alt="" />
                                </div>
                                <span className="pl-[4%] hover:font-extrabold hover:text-lime-50 duration-500 ease-in-out">Calendar</span>
                            </Link>
                        </li>
                            <li>
                                <div className="flex justify-center items-center text-lg xl:text-2xl 
                                text-violet-950 border border-black mt-3 rounded-full 
                                hover:duration-500 bg-lime-400 shadow-lg shadow-lime-400
                                py-1 hover:shadow-lime-700 hover:translate-x-[0.15rem] transition-shadow
                                duration-200 ease-in focus:shadow-outline focus:outline-none
                                btn px-4 text-center hover:text-lime-50" onClick={handleLogout}>
                                    <div className="size-[10%] sm:size-[25%] lg:size-[20%]">
                                        <img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880_1280.png" alt="" />
                                    </div>
                                    <span className="pl-[4%]">Logout</span>
                                </div>
                            </li>
                        </>
                    : 
                        <>
                            <li>
                                <Link to="/SignUp" className="flex justify-center items-center text-lg xl:text-2xl 
                                text-violet-950 border border-black mb-3 rounded-full 
                                hover:duration-500 bg-lime-400 shadow-lg shadow-lime-400
                                py-1 hover:shadow-lime-700 hover:translate-x-[0.15rem] transition-shadow
                                duration-200 ease-in focus:shadow-outline focus:outline-none
                                btn mt-2 px-4 text-center hover:text-lime-50">
                                    <div className="size-[10%] sm:size-[25%] lg:size-[20%]">
                                        <img src="https://cdn.pixabay.com/photo/2015/01/17/21/50/insect-602547_1280.png" alt="" />
                                    </div>
                                    <span className="pl-[4%]">Sign Up</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login" className="flex justify-center items-center text-xl xl:text-2xl 
                                text-violet-950 border border-black mb-3 rounded-full 
                                hover:duration-500 bg-lime-400 shadow-lg shadow-lime-400
                                py-1 hover:shadow-lime-700 hover:translate-x-[0.15rem] transition-shadow
                                duration-200 ease-in focus:shadow-outline focus:outline-none
                                btn px-4 text-center hover:text-lime-50">
                                    <div className="size-[10%] sm:size-[25%] lg:size-[20%]">
                                        <img src="https://cdn.pixabay.com/photo/2014/04/03/10/05/dragonfly-309770_1280.png" alt="" />
                                    </div>
                                    <span className="pl-[4%]">Login</span>
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
