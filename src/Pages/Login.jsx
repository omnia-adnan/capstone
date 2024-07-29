import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        console.log("Request data:", data);
        axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/login`, data)
        .then(
            
            resp => {
                console.log(resp);
                const authToken = resp.data.authToken;
                localStorage.setItem('authToken', authToken);
                navigate('/WelcomePage')
            }
        )
        .catch(
            err => {
            console.log('Login failed:', err);
            if (err.response.status === 401 || err.response.status === 403) {
                alert("Invalid email or password. Please try again.");             
            }
        }
        )
    };
    
    return(
        <div>
            <div
    className="relative mx-auto w-full max-w-md px-6 pt-10 pb-8 mt-10 text-white sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold">Welcome Back</h1>
            <p className="mt-2">Login below to access your account</p>
        </div>
        <div className="mt-5">
            <form onSubmit={handleLoginSubmit}>
                <div className="relative mt-6">
                <input type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="sara@gmail.com"
                className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />                    
                </div>
                <div className="relative mt-6">
                <input type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="12345678"
                className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />                    
                </div>
                <div className="my-6">
                    <button type="submit" className=" bg-lime-400 shadow-lg shadow-lime-400 border border-black w-full px-3 py-2 rounded-full focus:outline-none text-black">Log In</button>
                </div>  
                <p className="text-center text-sm">If you don't have an account<button onClick={() => props.onFormSwitch("Registra")} type="submit" className=" text-lime-400 font-semibold hover:underline focus:text-gray-800 focus:outline-none">Regist hear</button></p>
            </form>
        </div>
    </div>
</div>
            
        </div>
    );
}
export default Login;