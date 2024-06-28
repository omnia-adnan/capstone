import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import Navbar from "./Component/Navbar";
import GoalsDay from "./Pages/GoalsDay";
import Registra from "./Pages/Registra";

function App() {
  return (
    <div className=" bg-blue-950 min-h-screen flex">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/GoalsDay" element={<GoalsDay/>} />
      <Route path="/Calendar" element={<Calendar/>} />
      <Route path="/Registra" element={<Registra/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
