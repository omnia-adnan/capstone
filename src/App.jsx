import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import Navbar from "./Component/Navbar";
import GoalsDay from "./Pages/GoalsDay";
import Registra from "./Pages/Registra";
import Login from "./Pages/Login";
import { useState } from "react";


function App() {
  const [currentForm, setCurrentForm] = useState('Registra');
  // const [currentForm2, setCurrentForm2] = useState('Registra');


  const toggelForm = (formName) => {
    setCurrentForm(formName);
    // setCurrentForm2(formName)
  };

  return (
    <div className=" bg-blue-950 min-h-screen flex">
      
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/GoalsDay" element={<GoalsDay/>} />
      <Route path="/Calendar" element={<Calendar/>} />
      <Route path="/Registra" 
      element={
        currentForm === "Registra" ? (
          <Registra onFormSwitch={toggelForm} />
        ) : (
          <Login onFormSwitch={toggelForm} />
        )
      }
      />
      <Route 
            path="/Login" 
            element={
              currentForm === "Login" ? (
                <Login onFormSwitch={toggelForm} />
              ) : (
                <Registra onFormSwitch={toggelForm} />
              )
            } 
          />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
