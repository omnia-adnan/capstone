/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ContextApi = createContext({});

export function useAuth() {
    return useContext(ContextApi);
}

export function ContextApiAuth(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("");
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [todoDays, setTodoDays] = useState([]);
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
    const [activity, setActivity] = useState("");
    // const [age, setAge] = useState("");
    const [weightKg, setWeightKg] = useState("");
    const [heightCm, setHeightCm] = useState("");
    // const [gender, setGender] = useState("");
    const [bmr, setBmr] = useState("");
    const [carbs, setCarbs] = useState(null);
    const [fat, setFat] = useState(null);
    const [protein, setProtein] = useState(null);


    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = localStorage.getItem("authToken");
            if (token) {
                setIsLoggedIn(true);
                try {
                    const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log("User details:", response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    
                    if (response.data.name) {
                        setName(response.data.name);
                        console.log(name);
                    }
                    if (response.data.age) {
                        const age = response.data.age;
                        let ageGroup = "";
    
                        if (age >= 1 && age <= 6) {
                            ageGroup = "1";
                            setAge("1-6");
                        } else if (age >= 7 && age <= 12) {
                            ageGroup = "2";
                            setAge("7-12");
                        } else if (age >= 13 && age <= 17) {
                            ageGroup = "3";
                            setAge("13-17");
                        }
    
                        setSelectedAgeGroup(ageGroup);
                        localStorage.setItem("ageGroupId", ageGroup);
                        console.log(`Selected age group: ${ageGroup}`);
                    }
                    if (response.data.weight) {
                        setWeight(response.data.weight);
                        console.log(weight);
                    }
                    if (response.data.height) {
                        setHeight(response.data.height);
                        console.log(height);      
                    }
                    if (response.data.gender) {
                        setGender(response.data.gender);
                        console.log(gender);      
                    }
                } catch (err) {
                    console.error('Failed to fetch user details:', err);
                }
            }
        };
        fetchUserDetails();
    }, []);

    const calculateBMR = () => {
        const weightKg = parseFloat(weight);
        const heightcm = parseFloat(height);
        const ageValue = parseInt(age);
        const activityLevel = parseFloat(activity);

        if (isNaN(weightKg) || isNaN(heightcm) || isNaN(ageValue) || isNaN(activityLevel) || gender === "") {
            console.log('Invalid input');
            return;
        }

        let bmrCalc = 0;
        if (gender === "male") {
            bmrCalc = 66.5 + ( 13.75 * weight) + ( 5.003 * height) - ( 6.755 * ageValue)
        } else if(gender === "female"){
            bmrCalc = 665 + ( 9.563 * weight) + ( 1.850 * height) - ( 4.676 * ageValue)
        } else {
            console.log('filed to calc');
        }
        console.log({ bmrCalc }); 
        const totalcalc = bmrCalc * activityLevel;
        setBmr(totalcalc.toFixed(2));

        const carbsValue = totalcalc * 0.4;
        const fatValue = totalcalc * 0.3;
        const proteinValue = totalcalc * 0.3;
    
        setCarbs(carbsValue.toFixed(2));
        setFat(fatValue.toFixed(2));
        setProtein(proteinValue.toFixed(2));
    }
    

const value = {
    name,
    age,
    weight,
    weightKg,
    height,
    heightCm,
    gender,
    email,
    password,
    showProfile,
    user,
    isLoggedIn,
    todoDays,
    selectedAgeGroup,
    activity,
    bmr,
    carbs,
    fat,
    protein,
    setName,
    setAge,
    setWeight,
    setWeightKg,
    setHeight,
    setHeightCm,
    setGender,
    setEmail,
    setPassword,
    setShowProfile,
    setUser,
    setIsLoggedIn,
    setTodoDays,
    setSelectedAgeGroup,
    setActivity,
    setBmr,
    setCarbs,
    setFat,
    setProtein,
    calculateBMR,
};

    return (
    <ContextApi.Provider value={value}>
        {props.children}
    </ContextApi.Provider>
    );
}
