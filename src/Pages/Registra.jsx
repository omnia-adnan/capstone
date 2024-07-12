import { useState } from "react";
import img from "../Images/mother-429158_1280.jpg"
import axios from "axios";


function Registra(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gander, setGander] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            age,
            weight,
            height,
            gander,
            email,
            password,
        }
        axios.post('https://x8ki-letl-twmt.n7.xano.io/api:Wnz-Lmv_/auth/signup', data)
        .then(
            resp => { 
                console.log('Registration successful:', resp.data);
                // const token = resp.data.token; // Assuming token is returned from backend
                // localStorage.setItem('token', token);
                // console.log('Registration successful:', resp.data);
            }
        )
        .catch(
            err => {
                console.error('Registration error:', err);
                if (err.response) {
                    // Server responded with a status other than 200 range
                    console.error('Response data:', err.response.data);
                    console.error('Response status:', err.response.status);
                    console.error('Response headers:', err.response.headers);
                } else if (err.request) {
                    // Request was made but no response was received
                    console.error('Request data:', err.request);
                } else {
                    // Something happened in setting up the request
                    console.error('Error message:', err.message);
                }            }
        )
    };
    
    return(
        <div className=" container mr-[10%] sm:mr-0 mt-14 sm:mt-[3%] sm:mb-6">
            <div className="bg-blue-950 flex sm:flex-row border-2 border-black rounded-3xl shadow-2xl shadow-lime-400">
                <div className=" hidden text-white w-full sm:flex flex-col justify-center items-center px-5">
                    <img src={img} alt="mom and baby" className="rounded-lg border border-black"/>
                    <h1 className="text-xl my-2">Thank you for placing your trust in our web app</h1>
                        <p>When you use our services, 
                        we understand this responsibility and we work to protect your information. 
                        The reason we collect it is that we create a set of services that will help people</p>                </div>
                <div className="w-full p-5 sm:py-16 sm:px-5 px-5 sm:border-l border-black">
                    <h2 className=" text-xl mb-2">Regestar</h2>
                    <p className=" mb-3 text-lg"> 
                        Create your account it's free and only take a minute
                    </p>
                    <form onSubmit={handleSubmit}>
                            <input type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your child Name"
                            className=" py-1 px-4 w-full rounded-3xl"
                            />
                            <input type="number"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            placeholder="Your child Age"
                            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
                            />
                            <input type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
                            />
                            <input type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="password"
                            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
                            />
                            <input type="number"
                            name="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            placeholder="your child Weight"
                            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
                            />
                            <input type="number"
                            name="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            placeholder="Your child Height"
                            className=" py-1 px-4 w-full mt-1.5 rounded-3xl"
                            />
                            <select name="gander" value={gander} onChange={(e) => setGander(e.target.value)} className=" py-1 px-4 w-full mt-1.5 rounded-3xl text-black">
                                <option value="">Your child Gander</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            <button type="submit" className="w-full bg-lime-400 py-1 text-center sha1.5mt-1.5ow-md shadow-lime-400 border border-black rounded-3xl mt-6 text-black">Registra</button>
                    </form>
                    <p className="m-2 text-white">If already you had an account<button onClick={() => props.onFormSwitch("Login")} type="button" className=" text-lime-400">Login hear</button></p>
                </div>
            </div>
        </div>
    );
}
export default Registra;