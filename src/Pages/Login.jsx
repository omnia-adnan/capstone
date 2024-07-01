import { useState } from "react";


function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="block ml-auto mr-auto mt-auto mb-auto text-5xl">
        <form onSubmit={handleSubmit}>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="text"
            className="border border-gray-400 2xl:h-20 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
            />
            <input type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            placeholder="password"
            className="border border-gray-400 2xl:h-20 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
            />
            <button type="submit" className="w-full bg-lime-400 2xl:h-20 py-1 text-center shadow-md shadow-lime-400 border border-black rounded-3xl mt-6 text-black">Log In</button>
        </form>    
        <p className="mt-6 text-white">If you don't have an account<button onClick={() => props.onFormSwitch("Registra")} type="button" className=" text-lime-400">Regist hear</button></p>
        </div>
    );
}
export default Login;