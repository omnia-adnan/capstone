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


useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
        setIsLoggedIn(true);
    }
}, []);


useEffect(() => {
    const fetchUserDetails = async () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("User details:", response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
            } catch (err) {
                console.error('Failed to fetch user details:', err);
            }
        }
    };

    fetchUserDetails();
}, []);


const value = {
    name,
    age,
    weight,
    height,
    gender,
    email,
    password,
    showProfile,
    user,
    isLoggedIn,
    todoDays,
    selectedAgeGroup,
    setName,
    setAge,
    setWeight,
    setHeight,
    setGender,
    setEmail,
    setPassword,
    setShowProfile,
    setUser,
    setIsLoggedIn,
    setTodoDays,
    setSelectedAgeGroup,
};

    return (
    <ContextApi.Provider value={value}>
        {props.children}
    </ContextApi.Provider>
    );
}
