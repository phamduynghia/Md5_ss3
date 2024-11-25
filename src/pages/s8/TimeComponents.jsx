import { useState } from "react";
import Buttons from "./Buttons";

export default function TimeComponents() {
    const [time, setTime] = useState(60);
    // [1-data,2-setData] = useState();
    const [timeId, setTimeId] = useState(null);

    const handleStart = () => {
        // setTimeout() hoặc setInterval
        // setTimeout() -> chạy 1 lần xong thôi -> clearTimeout(id)
        // setInterval() -> chạy liên tục sau mỗi khoảng thời gian -> clearInterval(id)
        setTimeId(
            setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000),
        );
    };
    const handlePause = () => {
        clearInterval(timeId);
        setTimeId(null);
    };
    const handleReset = () => {
        setTime(60);
        setTimeId(null);
        clearInterval(timeId);
    };

    return (
        <div>
           <Buttons timeId={timeId} handleStart={handleStart} handlePause={handlePause} handleReset={handleReset} />
            <p>{time}</p>
        </div>
    );
}
