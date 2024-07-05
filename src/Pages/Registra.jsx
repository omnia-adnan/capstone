import { useState } from "react";
import img from "../Images/mother-429158_1280.jpg"

function Registra(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="mr-[10%] sm:mr-0 mt-14 sm:mt-[3%] sm:mb-6">
            <div className="bg-blue-950 text-white flex sm:flex-row border-2 border-black rounded-3xl shadow-2xl shadow-lime-400">
                <div className=" hidden w-full sm:flex flex-col justify-center items-center px-5">
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
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                            placeholder="Password"
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
                            <select name="gander" className=" py-1 px-4 w-full mt-1.5 rounded-3xl text-black">
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