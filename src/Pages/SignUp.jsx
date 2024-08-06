import img from "../Images/mother.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContextApi, useAuth } from "../Component/ContextApi";


function SignUp() {
    const { name,
        age,
        weight,
        height,
        gender,
        email,
        password,
        setName,
        setAge,
        setWeight,
        setHeight,
        setGender,
        setEmail,
        setPassword,
        setIsLoggedIn,
        setShowProfile,
    
    } = useAuth(ContextApi);
    const navigate = useNavigate()

    const handleRegistraSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            age,
            weight,
            height,
            gender,
            email,
            password,
        }

        axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/signup`, data)
        .then(
            resp => {
                console.log(resp);
                const authToken = resp.data.authToken;
                localStorage.setItem("authToken",authToken);
                setIsLoggedIn(true);
                navigate('/WelcomePage');
            }
        )
        .catch(err => {
            console.error('Signup failed:', err);
        });
    };
    
    
    return(
        
        <div className="text-center">
<div className="flex justify-center">
    <div className="max-w-screen-xl m-2 sm:m-10 3xl:m-20 text-white border-2 border-black shadow-lg rounded-lg sm:rounded-3xl shadow-lime-400 flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 lg:p-12">
            <div className="lg:mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs text-black">
                    <form onSubmit={handleRegistraSubmit}>
                            <input type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your child Name"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                            <input type="number"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            placeholder="Your child Age"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                            <input type="number"
                            name="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            placeholder="Your child Height"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                            <input type="number"
                            name="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            placeholder="your child Weight"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                <option value="">Your child Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            <input type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                            <input type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="password"
                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            />
                        <button onClick={() => {setShowProfile(true)}}
                            className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 border border-black text-black w-full py-2 rounded-full mb-2 hover:bg-lime-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                Sign Up
                            </span>
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 text-center hidden lg:grid border-l-2 border-black p-5">
            <div className="mt-20 xl:mt-16 w-full object-cover block mx-auto">
            <img src={img} alt="" className="rounded-3xl"/>
            </div>
            <p className="text-start">When you use our services, we understand this responsibility and we work to protect your information. The reason we collect it is that <br /> we create a set of services that will help people</p>
        </div>
    </div>
</div>
    </div>
    );
}
export default SignUp;