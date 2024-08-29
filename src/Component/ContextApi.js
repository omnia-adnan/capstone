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
    const [imgUser, setImgUser] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [todoDays, setTodoDays] = useState([]);
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
    const [activity, setActivity] = useState("");
    const [bmr, setBmr] = useState("");
    const [carb, setCarb] = useState(null);
    const [fat, setFat] = useState(null);
    const [protein, setProtein] = useState(null);
    const [userData, setUserData] = useState(null);


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
                    localStorage.setItem('user', JSON.stringify(response.data));
                    if (response.data.imgUser) {
                        localStorage.setItem('user', JSON.stringify(response.data));
                        localStorage.setItem('imgUser', JSON.stringify(response.data.imgUser)); 
                        setImgUser(response.data.imgUser);
                    }
                    if (response.data.name) {
                        setName(response.data.name);
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
                    }
                    if (response.data.weight) {
                        setWeight(response.data.weight);
                    }
                    if (response.data.height) {
                        setHeight(response.data.height);
                    }
                    if (response.data.gender) {
                        setGender(response.data.gender);
                    }
                    if (response.data.bmr) {
                        setBmr(response.data.bmr);
                    }   
                    if (response.data.carb) {
                        setCarb(response.data.carb);
                    }                 
                    if (response.data.fat) {
                        setFat(response.data.fat);                        
                    }
                    if (response.data.protein) {
                        setProtein(response.data.protein);
                    }
                    if (response.data) {
                        setUserData(response.data);
                    } 
                    } catch (err) {
                    console.error('Failed to fetch user details:', err);
                }
            }
        };
        fetchUserDetails();
    }, []);
    const storedImgUser = localStorage.getItem('imgUser');
    const imgUserObject = storedImgUser ? JSON.parse(storedImgUser) : null;


const value = {
    imgUserObject,
    name,
    age,
    weight,
    height,
    gender,
    email,
    password,
    imgUser,
    showProfile,
    user,
    isLoggedIn,
    todoDays,
    selectedAgeGroup,
    activity,
    bmr,
    carb,
    fat,
    protein,
    userData,
    setName,
    setAge,
    setWeight,
    setHeight,
    setGender,
    setEmail,
    setPassword,
    setImgUser,
    setShowProfile,
    setUser,
    setIsLoggedIn,
    setTodoDays,
    setSelectedAgeGroup,
    setActivity,
    setBmr,
    setCarb,
    setFat,
    setProtein,
    setUserData,
};

    return (
    <ContextApi.Provider value={value}>
        {props.children}
    </ContextApi.Provider>
    );
}
