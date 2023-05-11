import React, { useEffect, useState } from 'react';

    // state holds values for times
    // useEffect remounts components 
    // is timer paused? isPaused?
        // state initially set to false but is flipped on botton press
        // isPaused == true => secondary button shows "reset"
        // isPaused == False => secondard button shows "lap" 

const StopWatch = () =>{

    const [isPaused, setIsPaused] = useState(false)
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [mins, setMins] = useState(0)
    const [mili, setMili] = useState(0)
    const [lap, setLap] = useState(0)

    const [lapInfo, setLapInfo] = useState([])

    useEffect(()=> {
        // useEffect is ran on every initial mount (initial page load)
        const secondsInterval = setInterval(secIntervalFunc, 1000)

        // Any desired functionality needs to be placed before the return statement/clean up
        if(isPaused){
            clearInterval(secondsInterval)
        }
        // returns clean up function on component unmount -> i.e. a re-render
        return () => clearInterval(secondsInterval)
    }, [isPaused])

    useEffect(()=> {
        // useEffect is ran on every initial mount (initial page load)
        const miliInterval = setInterval(miliIntervalFunc, 10)

        // Any desired functionality needs to be placed before the return statement/clean up
        if(isPaused){
            clearInterval(miliInterval)
        }

        // returns clean up function on component unmount -> i.e. a re-render
        return () => clearInterval(miliInterval)
    }, [isPaused])

    const secIntervalFunc = () => {
        // total time seconds
        console.log("tick")
        setSeconds(prevtime => (prevtime +  1))
    }

    const miliIntervalFunc = () => {
        // total time in miliseconds
        setMili(prevMili => (prevMili +  1))
    }
    
    const handleStartStop = () =>{
        setIsPaused(!isPaused)
    }

    const handleLapReset = () => {
        // Clock is running; lap/reset button should add a lap
        if(!isPaused){
            console.log("should add lap")
            setLap((prevLap) => prevLap + 1)
            setLapInfo((prevLapInfo) => [...prevLapInfo, {"lap":seconds}])
            console.log(lapInfo)

        }
        // Resetting time and laps
        if(isPaused){
            setSeconds(0)
            setMili(0)
            setLap(0)
            setLapInfo([])
        }
    }

    return(
        <div className="stopWatch">
            <div className="stopWatch__contianer">
                <div className="stopWatch__container__timeLabels">
                        <h5 className="stopWatch__timeLabels stopWatch__timeLabels--hrs">HR</h5>
                        <h5 className="stopWatch__timeLabels stopWatch__timeLabels--min">MIN</h5>
                        <h5 className="stopWatch__timeLabels stopWatch__timeLabels--sec">SEC</h5>
                </div>
                <div className="stopWatch__container__time">
                    <h3 className="stopWatch__container__time stopWatch__container__time--hrs"> { Math.floor(seconds/3600) < 10 ? `0${Math.floor(seconds/3600)}` : Math.floor(seconds/3600) } </h3>
                    <h3>:</h3>
                    <h3 className="stopWatch__container__time stopWatch__container__time--min"> { Math.floor(seconds/60) < 10 ? `0${Math.floor(seconds/60)}` : Math.floor(seconds/60) }</h3>
                    <h3>:</h3>
                    <h3 className="stopWatch__container__time stopWatch__container__time--sec">{ Math.floor(seconds%60) < 10 ? `0${Math.floor(seconds%60)}` : Math.floor(seconds%60) } </h3>
                    <h3 className="stopWatch__container__time stopWatch__container__time--sec">{ Math.floor(mili%60) < 10 ? `0${Math.floor(mili%60)}` : Math.floor(mili%60) } </h3>
                </div>
            </div>
            <div className="stopWatch__container__controls">
                <button onClick={handleStartStop} className='stopWatch__container__controls stopWatch__container__controls--startStop'> {isPaused ? "Start" : "Stop" } </button>
                <button onClick={handleLapReset} className='stopWatch__container__controls stopWatch__container__controls--lapReset'>{isPaused ? "Reset" : "Lap"} </button>
            </div>
            <div className = "stopWatch__container__laps"> 
                {lapInfo.slice(0).reverse().map((lapObject, key) => 
                <div className='stopWatch__container__laps--singleLap'>
                    <h6>Lap {key+1} </h6>
                    <div className="stopWatch__container__laps--singleLap--time">
                        <h6>{ Math.floor(lapObject.lap/360) < 10 ? `0${Math.floor(lapObject.lap/3600)}` : Math.floor(lapObject.lap%60) }:</h6>
                        <h6>{ Math.floor(lapObject.lap/360) < 10 ? `0${Math.floor(lapObject.lap/60)}` : Math.floor(lapObject.lap%60) }:</h6>
                        <h6>{ Math.floor(lapObject.lap/360) < 10 ? `0${Math.floor(lapObject.lap%60)}` : Math.floor(lapObject.lap%60) }</h6>
                    </div>
                </div> )} 
            </div>
        </div>
    )
}

export default StopWatch