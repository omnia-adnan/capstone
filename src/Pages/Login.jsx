import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };
        console.log("Request data:", data);
    
        axios.post('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/login', data)
            .then(resp => {
                console.log('Full Response:', resp);
                const authToken = resp.data.authToken;
                
                if (authToken) {
                    localStorage.setItem('authToken', authToken);
                    console.log('Token stored:', authToken);
    
                    // Fetch user data after storing the token
                    fetchUserData(authToken);
                } else {
                    console.error('Token is missing in the response');
                }
            })
            .catch(err => {
                console.log('Login failed:', err);
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    alert("Invalid email or password. Please try again.");
                }
            });
    };
    
    const fetchUserData = (token) => {
        axios.get('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(resp => {
            console.log('User Data Response:', resp);
            const userData = resp.data; // Adjust this if needed based on response structure
            
            if (userData) {
                localStorage.setItem('userData', JSON.stringify(userData));
                console.log('User data stored:', userData);
                navigate('/WelcomePage');
            } else {
                console.error('User data is missing in the response');
            }
        })
        .catch(err => {
            console.error('Fetching user data failed:', err);
            if (err.response && err.response.status === 404) {
                alert("User data not found. Please check the endpoint.");
            }
        });
    };
    
    return(
        <div className="block ml-auto mr-auto mt-auto mb-auto text-lg text-center">
        <form onSubmit={handleSubmit}>
        <p  className=" text-clamp 2xl:text-9xl text-white mt-7 2xl:mt-96 mb-3 2xl:mb-14" >Welcome Back</p>
        <p className="mb-6 2xl:mb-20 text-base 2xl:text-7xl text-white">If you don't have an account<button onClick={() => props.onFormSwitch("Registra")} type="submit" className=" text-lime-400">Regist hear</button></p>
            <input type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="sara@gmail.com"
            className=" mb-6 2xl:mb-12 px-6 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
            /><br/>
            <input type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
            className=" mb-6 2xl:mb-12 px-6 2xl:py-3 2xl:w-1/3 2xl:text-7xl rounded-3xl 2xl:rounded-full"
            /><br/>
            <button type="submit" className="px-6 2xl:py-3 w-auto 2xl:w-1/3 bg-lime-400 py-1 shadow-lg shadow-lime-400 border border-black rounded-3xl 2xl:rounded-full 2xl:text-7xl mb-6 text-black">Log In</button>
        </form>    
        </div>
    );
}
export default Login;