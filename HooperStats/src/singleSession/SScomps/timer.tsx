import '../SS.css'
import { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        let interval: NodeJS.Timeout;

        if (isRunning) {
            interval = setInterval(()=>{
                setTime((prevTime) =>prevTime +1);
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return ()=>clearInterval(interval)
    },[isRunning])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds/60)
        .toString()
        .padStart(2, "0")
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    }
    

    return (
        <div className='timer__container'>
            <h1 className='timer'>{formatTime(time)}</h1>
            <div className='button__timer'>
                <button className='iniciar__timer' onClick={() => setIsRunning(true)}>iniciar</button>
                <button className='parar__timer' onClick={() => setIsRunning(false)}>Parar</button>
                <button className='limpar__timer' onClick={()=> setTime(0)}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Timer