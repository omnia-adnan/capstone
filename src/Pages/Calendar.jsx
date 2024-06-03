import { useState } from "react";
import Calendar from "react-calendar";

function CalendarPage() {
    const [data, setData] = useState(new Date());
    const onChang = newdata => {
        setData(newdata);
    }
    return(
        <div className=" text-white bg-blue-900 border border-black leading-6 2xl:text-7xl">
            <Calendar onChang={onChang} value={data} />
        </div>
    );
}
export default CalendarPage;