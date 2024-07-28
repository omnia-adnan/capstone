/* eslint-disable no-undef */
import { useState } from "react";
// import img from "../Images/mother-429158_1280.jpg"
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
                    <h2 className=" text-clamp text-white mt-7 mb-3 2xl:text-9xl 2xl:mt-96 2xl:mb-14">Regestar</h2>
                    <p className="mb-6 text-base text-white 2xl:mb-20 2xl:text-7xl">If already you had an account<button onClick={() => props.onFormSwitch("Login")} type="button" className=" text-lime-400">Login hear</button></p>
                    <form onSubmit={handleRegistraSubmit}>
                            <input type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your child Name"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <input type="number"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            placeholder="Your child Age"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <input type="number"
                            name="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            placeholder="your child Weight"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <input type="number"
                            name="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            placeholder="Your child Height"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="mb-6 px-12 sm:px-[3.8rem] py-1 text-black 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full">
                                <option value="">Your child Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select><br/>
                            <input type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <input type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="password"
                            className="mb-6 px-7 sm:px-10 py-1 2xl:mb-12 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
                            /><br/>
                            <button type="submit" className="px-6 w-60 sm:w-[16rem] bg-lime-400 py-1 shadow-lg shadow-lime-400 border border-black rounded-3xl mb-6 text-black 2xl:py-3 2xl:w-1/3 2xl:rounded-full 2xl:text-7xl">Register</button>
                    </form>
                </div>
    );
}
export default Register;