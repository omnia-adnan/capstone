import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import Navbar from "./Component/Navbar";
import GoalsDay from "./Pages/GoalsDay";
import Registra from "./Pages/Registra";
import Login from "./Pages/Login";
import WelcomePage from "./SecoondaryPages/WelcomePage";
import FinishWorkoutpage from "./SecoondaryPages/FinishWorkoutpage";
import { useEffect } from "react";


function App() {
  
  useEffect(() => {
    document.title = "GrowStrong";
  }, [])
  
  
  return (
    <div className="bg-blue-950 min-h-screen font-Handlee">
    <BrowserRouter>
    <div className="sm:flex">
    <div className="sm:w-1/4">
      <Navbar />
    </div>
    <div className="sm:w-3/4 min-h-screen">    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/GoalsDay" element={<GoalsDay/>} />
      <Route path="/WelcomePage" element={<WelcomePage/>} />
      <Route path="/FinishWorkoutpage" element={<FinishWorkoutpage/>} />
      <Route path="/Calendar" element={<Calendar/>} />
      <Route path="/Registra" element={<Registra/>}/>
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
