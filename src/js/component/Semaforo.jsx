import React, { useState } from "react";

const Semaforo = () => {
    const black= ["⚫️","⚫️","⚫️"]
    const red = ["🔴" ,"⚫️", "⚫️"];
    const yellow = ["⚫️","🟡","⚫️"];
    const green = ["⚫️","⚫️","🟢"];

    const [semaforo,setSemaforo] = useState(black)

    const afterYellow = () => {
        setSemaforo(green)
        setInterval(afterStart,3000)
    }

    const afterRed = () => {
        setSemaforo(yellow)
        setInterval(afterYellow,3000)
    }
    const afterStart = () =>{
        setSemaforo(red)
        setInterval(afterRed,3000)
        
       
        }
    return (
        <>
        <button onClick={()=>{afterStart()}}>
            Play!
        </button>
        <p>{semaforo}</p>
    
        </>
    )

}


export default Semaforo;