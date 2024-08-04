import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar({setTodos}) {

    return (
        <div className=" 2xl:py-24 text-white 2xl:pr-24">
        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={"95vh"}
            events={[
                { title: "It's my bearthday yeeeeee", date: '2024-08-15' },
                { title: 'event 2', date: '2024-08-02' }
            ]}
        />
        </div>
    );
}

export default Calendar;