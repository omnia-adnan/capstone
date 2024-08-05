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

useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
        setIsLoggedIn(true);
    }
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
};

    return (
    <ContextApi.Provider value={value}>
        {props.children}
    </ContextApi.Provider>
    );
}
