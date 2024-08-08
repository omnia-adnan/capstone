/* eslint-disable react-hooks/exhaustive-deps */
import img from "../Images/mother.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContextApi, useAuth } from "../Component/ContextApi";
import { useEffect } from 'react';

function SignUp() {
    const { 
        name, age, weight, height, gender, email, password, selectedAgeGroup,
        setName, setAge, setWeight, setHeight, setGender, setEmail, setPassword,
        setIsLoggedIn, setShowProfile, setTodoDays, setSelectedAgeGroup
    } = useAuth(ContextApi);
    
    const navigate = useNavigate();
    const fetchTodoDays = async (ageGroupId) => {
            try {
                const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/age_groups', {
                    params: { ageGroupId }
            });
            console.log('Full response:', response);
        
            const allData = response.data;
            console.log('All data:', allData);
        
            const ageRanges = {
                    '1': { min: 1, max: 6 },
                    '2': { min: 7, max: 12 },
                    '3': { min: 13, max: 17 }
            };
        
            const ageRange = ageRanges[ageGroupId];
            console.log('Selected age range:', ageRange);
        
            if (!ageRange) {
                    console.error('Invalid ageGroupId:', ageGroupId);
                    return;
            }
        
            const filteredData = allData.filter(item => {
                    console.log('Item:', item);
                    return item.min_age >= ageRange.min && item.max_age <= ageRange.max;
            });
        
            console.log('Filtered data:', filteredData);
            setTodoDays(filteredData);
            } catch (error) {
            console.error('Error fetching todo days:', error);
            }
        };
        

    const handleAgeGroupChange = (event) => {
        const ageGroup = event.target.value;
        setSelectedAgeGroup(ageGroup);

        console.log(`Selected age group: ${ageGroup}`);
        
        if (ageGroup === "1") {
            setAge("1-6");
        } else if (ageGroup === "2") {
            setAge("7-12");
        } else if (ageGroup === "3") {
            setAge("13-17");
        }
    };

    useEffect(() => {
        console.log(`Selected age group in useEffect: ${selectedAgeGroup}`);
            if (selectedAgeGroup) {
                fetchTodoDays(selectedAgeGroup);
            }
    }, [selectedAgeGroup]);
        

    const handleRegistraSubmit = (e) => {
        e.preventDefault();
        let ageValue = 0;
        if (age.includes('-')) {
            const [minAge, maxAge] = age.split('-').map(Number);
            ageValue = Math.round((minAge + maxAge) / 2); 
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
            password 
        };

        console.log('Submitting registration data:', data);

        axios.post('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/signup', data)
            .then(resp => {
                console.log('Signup response:', resp);
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
        <div className="text-center">
            <div className="flex justify-center">
                <div className="max-w-screen-xl m-2 sm:m-10 3xl:m-20 text-white border-2 border-black shadow-lg rounded-lg sm:rounded-3xl shadow-lime-400 flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 lg:p-12">
                        <div className="lg:mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs text-black">
                                    <form onSubmit={handleRegistraSubmit}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            maxLength={15}
                                            minLength={2}
                                            placeholder="Your child Name"
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <select
                                            value={selectedAgeGroup}
                                            onChange={handleAgeGroupChange}
                                            required
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            <option value="">Select Age Group</option>
                                            <option value="1">Early Childhood (1-6 years)</option>
                                            <option value="2">Middle Childhood (7-12 years)</option>
                                            <option value="3">Adolescence (13-17 years)</option>
                                        </select>
                                        <input
                                            type="number"
                                            name="height"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            required
                                            min={49}
                                            max={200}
                                            placeholder="Your child Height"
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <input
                                            type="number"
                                            name="Weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            required
                                            min={3}
                                            max={100}
                                            placeholder="Your child Weight"
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <select
                                            name="gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="w-full px-8 py-2 text-black rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        >
                                            <option value="">Your child Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Email"
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="Password"
                                            className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <button
                                            onClick={() => { setShowProfile(true); }}
                                            className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 border border-black text-black w-full py-2 rounded-full mb-2 hover:bg-lime-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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