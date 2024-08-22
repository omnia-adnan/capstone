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
                console.log('Fetched Data:', data); 
                const mappedData = data.map(event => ({
                    title: event.title,
                    date: event.date,
                    description: event.description,
                    tasks: event.tasks.map(task => ({
                        id: task.id,
                        age_groups_id: task.age_groups_id,
                        title: task.title,
                        description: task.description,
                    })),
                }));
                console.log('Mapped Data:', mappedData); 
                setEvents(mappedData);
            } catch (error) {
                console.error('Error fetching events:', error.response ? error.response.data : error.message);
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
