import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:epthuZZq/save_tasks');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setEvents(data.map(event => ({
                    title: event.title,
                    date: event.date,
                    description: event.description,
                })));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="mt-5 text-white">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height="95vh"
                events={events}
            />
        </div>
    );
}

export default Calendar;
