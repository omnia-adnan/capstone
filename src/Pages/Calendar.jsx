import { useState } from "react";
import Calendar from "react-calendar";

function CalendarPage() {
    const [data, setData] = useState(new Date());
    const onChang = newdata => {
        setData(newdata);
    }
    return(
        <div className=" p-3 md:my-4 2xl:text-6xl text-white flex-1 h-screen">
            <Calendar onChang={onChang} value={data} />
            
        </div>
    );
}
export default CalendarPage;