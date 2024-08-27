import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Component/ContextApi";
import { LuLogIn } from "react-icons/lu";

function Login() {
    const { email, password, setEmail, setPassword, setIsLoggedIn, setShowProfile } = useAuth();
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log("Request data:", data);
        axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/login`, data)
            .then(resp => {
                // console.log("Login response:", resp);
                const authToken = resp.data.authToken;
                    localStorage.setItem('authToken', authToken);
                    axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })
                .then(userInfo => {
                    // console.log("User details:", userInfo.data);
                    localStorage.setItem('user', JSON.stringify(userInfo.data));
                    setIsLoggedIn(true);
                    navigate('/Profile');
                })
                .catch(err => {
                    console.log('Failed to fetch user details:', err);
                });
            })
            .catch(err => {
                console.log('Login failed:', err);
            });
    };
    

    return (
        <div className=" block mx-auto max-w-xl m-2 lg:mt-10 text-white border-2 border-black shadow-lg rounded-lg sm:rounded-3xl shadow-lime-400">
            <div className="relative mx-auto w-full max-w-md px-6 pt-10 pb-8 mt-10 text-white sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Welcome Back</h1>
                        <p className="mt-2">Login below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="relative mt-6">
                                <label className="p-3 text-xl">
                                    Email
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="sara@gmail.com"
                                    className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                                </label>
                            </div>
                            <div className="relative mt-2">
                                <label className="p-3 text-xl">
                                    Password
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="12345678"
                                    className="w-full text-black px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                                </label>
                            </div>
                            <button
                                type="submit"
                                onClick={() => { setShowProfile(true); }}
                                className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 
                                border border-black text-black w-full py-2 rounded-full mb-2 hover:shadow-lime-700 
                                transition-shadow duration-200 ease-in flex items-center justify-center hover:translate-y-1 
                                focus:shadow-outline btn px-4 text-center"
                                >
                                <LuLogIn className="w-6 h-6 -ml-2" />
                                <span className="ml-3">Login</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
