import axios from "axios";
import { useState } from "react";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:Wnz-Lmv_/auth/login`, data)
        .then(
            resp => {
                console.log(resp);
            }
        )
        .catch(
            err => {
            console.log('Login failed:', err);
            }
        )
    };


    return(
        <div className="block ml-auto mr-auto mt-auto mb-auto text-lg text-center">
        <form onSubmit={handleSubmit}>
            <input type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="sara@gmail.com"
            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
            />
            <input type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
            />
            <button type="submit" className="w-full bg-lime-400 2xl:h-20 py-1 text-center shadow-md shadow-lime-400 border border-black rounded-3xl mt-6 text-black">Log In</button>
        </form>    
        <p className="mt-6 text-white">If you don't have an account<button onClick={() => props.onFormSwitch("Registra")} type="submit" className=" text-lime-400">Regist hear</button></p>
        </div>
    );
}
export default Login;