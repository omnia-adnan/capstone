// import { useState } from "react";
// import Calendar from "react-calendar";

// function CalendarPage() {
//     const [data, setData] = useState(new Date());
//     const onChang = newdata => {
//         setData(newdata);
//     }
//     return(
//         <div className=" p-3 md:my-4 2xl:text-6xl text-white flex-1 h-screen">
//             <Calendar onChang={onChang} value={data} />
            
//         </div>
//     );
// }
// export default CalendarPage;


import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
    return (
        <div className="size-full p-4 2xl:text-7xl 2xl:size-4/5 2xl:py-24 text-white 2xl:pr-24">
        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
            }}
            height={"100vh"}
            
        />
        </div>
    );
}

export default Calendar;