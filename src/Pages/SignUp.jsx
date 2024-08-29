import img from "../Images/mother.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  useAuth } from "../Component/ContextApi";

function SignUp() {
    const { 
        name, age, weight, height, gender, email, password, selectedAgeGroup, setImgUser,
        setName, setAge, setWeight, setHeight, setGender, setEmail, setPassword, imgUser,
        setIsLoggedIn, setShowProfile, setSelectedAgeGroup, activity, setActivity,
    } = useAuth();
    const navigate = useNavigate();

    const handleAgeGroupChange = (event) => {
        const ageGroup = event.target.value;
        setSelectedAgeGroup(ageGroup);
        if (ageGroup === "1") {
            setAge("1-6");
        } else if (ageGroup === "2") {
            setAge("7-12");
        } else if (ageGroup === "3") {
            setAge("13-17");
        }
        localStorage.setItem("ageGroupId", ageGroup);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUser(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegistraSubmit = (e) => {
        e.preventDefault();

        let ageValue = 0;
        if (age.includes('-')) {
            const [minAge, maxAge] = age.split('-').map(Number);
            ageValue = Math.round((minAge + maxAge) / activity); 
        } else {
            ageValue = parseInt(age, 10);
        }

        const data = { 
            name, 
            age: ageValue,
            weight: parseFloat(weight),
            height: parseFloat(height),
            gender,
            email,
            password,
            activity, 
            imgUser: imgUser,
        };
        axios.post('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/signup', data)
            .then(resp => {
                // console.log('Signup response:', resp);
                const authToken = resp.data.authToken;
                localStorage.setItem("authToken", authToken);
                setIsLoggedIn(true);
                navigate('/WelcomePage');
            })
            .catch(err => {
                console.error('Signup failed:', err.response ? err.response.data : err.message);
            });
    };
    

    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-screen-xl m-2 sm:m-10 text-white border-2 border-black shadow-lg rounded-lg sm:rounded-3xl shadow-lime-400 flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 lg:p-12">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                            <div className="w-full flex-1 mt-4">
                                <div className="mx-auto max-w-xs text-black">
                                    <form onSubmit={handleRegistraSubmit}>
                                        <label className="p-3 text-white">
                                        Your child Name
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required={true}
                                            maxLength={15}
                                            minLength={2}
                                            placeholder="name"
                                            className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        </label>
                                        <label className="p-3 text-white">
                                        Select Age Group
                                        <select
                                            value={selectedAgeGroup}
                                            onChange={handleAgeGroupChange}
                                            required={true}
                                            className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            <option value="0">age group</option>
                                            <option value="1">Early Childhood (1-6 years)</option>
                                            <option value="2">Middle Childhood (7-12 years)</option>
                                            <option value="3">Adolescence (13-17 years)</option>
                                        </select>
                                        </label>
                                        <label className="p-3 text-white">
                                        Your child Gender
                                        <select
                                            name="gender"
                                            value={gender}
                                            required={true}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            <option value="">gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        </label>
                                        <label className="p-3 text-white">
                                        Select your Activity
                                        <select required={true} name="activity" className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                                        value={activity} onChange={(e) => setActivity(e.target.value)}>
                                                    <option value="/">activity</option>
                                                    <option value="1.2">Sedentary (Very littel or no exercise, and desk job)</option>
                                                    <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                                                    <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                                                    <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                                                    <option value="1.9">Extremely Active (very intense exercise, and physical job)</option>
                                        </select>
                                        </label>
                                        <label className="p-3 text-white">
                                        Your child Height
                                        <input
                                            type="number"
                                            name="height"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            required={true}
                                            min={49}
                                            max={200}
                                            placeholder="height"
                                            className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        </label>
                                        <label className="p-3 text-white">
                                        Your child Weight
                                        <input
                                            type="number"
                                            name="Weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required={true}
                                            min={3}
                                            max={100}
                                            placeholder="weight"
                                            className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        </label>
                                        <label className="p-3 text-white">
                                        The Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                            placeholder="email"
                                            className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        </label>
                                        <label className="p-3 text-white">
                                        The Password
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required={true}
                                            placeholder="password"
                                            className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        </label>
                                        <label className="p-3 text-white">
                                            Set Image Profile
                                            <input
                                                type="file"
                                                className="w-full px-8 py-2 rounded-full text-black mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <button
                                            type="submit" 
                                            onClick={() => { setShowProfile(true); }}
                                            className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 
                                            border border-black text-black w-full py-2 rounded-full mb-2 hover:shadow-lime-700 
                                            transition-shadow duration-200 ease-in flex items-center justify-center hover:translate-y-1 
                                            focus:shadow-outline btn px-4 text-center"
                                            >
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">Sign Up</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:grid border-l-2 border-black p-5">
                        <div className="mt-20 xl:mt-16 w-full object-cover block mx-auto">
                            <img src={img} alt="" className="rounded-3xl" />
                        </div>
                        <p className="text-start">When you use our services, we understand this responsibility and we work to protect your information. The reason we collect it is that we create a set of services that will help people.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
