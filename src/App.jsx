import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Exercises from "./Pages/Exercises";
import Calendar from "./Pages/Calendar";
import Caloriecalculator from "./Pages/Caloriecalculator";
import Signup from "./Pages/Signup";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className=" bg-blue-950 h-screen flex">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Exercises" element={<Exercises/>} />
      <Route path="/Calendar" element={<Calendar/>} />
      <Route path="/Caloriecalculator" element={<Caloriecalculator/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
