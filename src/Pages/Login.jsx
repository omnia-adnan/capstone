import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Component/ContextApi";
import { LuLogIn } from "react-icons/lu";

function Login() {
    const { email, password, setEmail, setPassword, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log("Request data:", data);

        axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/login`, data)
            .then(resp => {
                console.log(resp);
                const authToken = resp.data.authToken;
                localStorage.setItem('authToken', authToken);
                setIsLoggedIn(true);
                navigate('/Profile');
            })
            .catch(err => {
                console.log('Login failed:', err);
            });
    };

    return (
        <div className="max-w-screen-xl m-2 sm:m-10 3xl:m-20 text-white border-2 border-black shadow-lg rounded-lg sm:rounded-3xl shadow-lime-400 flex justify-center">
            <div className="relative mx-auto w-full max-w-md px-6 pt-10 pb-8 mt-10 text-white sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Welcome Back</h1>
                        <p className="mt-2">Login below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="relative mt-6">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="sara@gmail.com"
                                    className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                            </div>
                            <div className="relative mt-6">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="12345678"
                                    className="w-full text-black px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 border border-black text-black w-full py-2 rounded-full mb-2 hover:bg-lime-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
