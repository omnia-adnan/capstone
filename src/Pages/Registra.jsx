/* eslint-disable no-undef */
import { useState } from "react";
import img from "../Images/mother.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("");
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
                navigate('/Profile')
            }
        )
        .catch(err => {
            console.error('Signup failed:', err);
        });
    };
    
    
    return(
        
        <div className="text-center">
<div class="flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 3xl:m-20 text-white border-2 border-black shadow-lg sm:rounded-3xl shadow-lime-400 flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 lg:p-12">
            <div class="lg:mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div class="w-full flex-1 mt-8">
                    <div class="mx-auto max-w-xs">
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
                            name="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            placeholder="your child Weight"
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
                            {/* <p className="mt-6 text-xs text-center">If already you had an account <button onClick={() => props.onFormSwitch("Login")} type="button" className=" text-lime-400">Login hear</button></p> */}
                        <button
                            className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 border border-black text-black w-full py-2 rounded-full mb-2 hover:bg-lime-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Sign Up
                            </span>
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 text-center hidden lg:grid border-l-2 border-black p-5">
            <div class="mt-20 xl:mt-16 w-full object-cover block mx-auto">
            <img src={img} alt="" className="rounded-3xl"/>
            </div>
            <p className="text-start">When you use our services, we understand this responsibility and we work to protect your information. The reason we collect it is that <br /> we create a set of services that will help people</p>
        </div>
    </div>
</div>
    </div>
    );
}
export default Register;