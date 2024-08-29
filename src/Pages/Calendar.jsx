import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";

function Calendar() {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null, description: "" });
    const [showTask, setShowTask] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (arg) => {
        const event = events.find(e => e.title === arg.event.title);
        setSelectedEvent(event);
        setShowTask(true);
    };

    const handleCloseModal = () => {
        setShowTask(false);
    };

    const handleSelect = (info) => {
        const { start, end } = info;
        setNewEvent({ ...newEvent, start, end });
        setShowModal(true); 
    };

    const handleClose = () => {
        setShowModal(false);
        setNewEvent({ title: "", start: null, end: null, description: "" }); 
    };

    const handleSave = async () => {
        if (newEvent.title) {
            const eventWithTask = {
                start: newEvent.start,
                end: newEvent.end,
                title: newEvent.title,
                id: uuid(),
                description: newEvent.description,
            };
            setEvents([
                ...events,
                eventWithTask,
            ]);
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:epthuZZq/save_tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventWithTask),
                });
    
                if (!response.ok) {
                    const responseText = await response.text();
                    console.error('HTTP error! status:', response.status, 'Response:', responseText);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                } catch (error) {
                console.error('Error saving event:', error.message);
            }
        }
        handleClose(); 
    };
    

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:epthuZZq/save_tasks');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
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
                setEvents(mappedData);
            } catch (error) {
                console.error('Error fetching events:', error.response ? error.response.data : error.message);
            }
        };


        fetchEvents();
    }, []);
    return (
        <div className="mt-5 xl:mr-6 text-white overflow-hidden">
            <FullCalendar
                editable
                selectable
                events={events}
                select={handleSelect}
                eventClick={handleEventClick}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height="95vh"
            />
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white/95 p-5 text-black rounded-lg shadow shadow-[0_4px_8px_rgba(0, 0, 0, 0.2)] w-72 text-center">
                        <h1 className="text-lg xl:text-2xl mb-2">Create Event</h1>
                        <input
                            type="text"
                            value={newEvent.title}
                            className="h-8 rounded border hover:border-blue-900 mb-2"
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            placeholder="Event Title"
                        />
                        <textarea
                            value={newEvent.description}
                            className="w-full h-24 rounded border hover:border-blue-900 mb-2"
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            placeholder="Event Description"
                        />
                        <div className="flex justify-between mt-5">
                            <button onClick={handleClose} className="px-5 py-2 border-none cursor-pointer rounded bg-[#ccc]">Cancel</button>
                            <button onClick={handleSave} className="px-5 py-2 border-none cursor-pointer rounded bg-blue-900 text-white">Save</button>
                        </div>
                    </div>
                </div>
            )}
            {showTask && selectedEvent && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white/95 p-5 text-black rounded-lg shadow shadow-[0_4px_8px_rgba(0, 0, 0, 0.2)] w-72 text-center">
                        <h1 className="text-lg xl:text-2xl mb-2">{selectedEvent.title}</h1>
                        <p className="mb-2">{selectedEvent.description}</p>
                        <button onClick={handleCloseModal} className="px-5 py-2 border-none cursor-pointer rounded bg-blue-900 text-white">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar;
