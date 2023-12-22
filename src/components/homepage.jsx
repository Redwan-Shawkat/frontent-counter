import React from 'react'
import "./../App.css"
import { useState } from 'react'

export const Homepage = () => {

    const[count, setCount] = useState(0);

    const increasebtn = () => {
        console.log("increase button is triggered")
        setCount(count + 1);
    }

    const decreasebtn = () => {
        console.log("decrease button is triggered")
        setCount(count - 1);
    }

    const increasebtnplusfive = () => {
        console.log(" Increase button + 5 is triggered")
        setCount(count + 5)
    }

    const decreasebtnminusfive = (counter) => {
        console.log("Decrease button - 5 is triggered")
        // setCount(count - counter)
        setCount(prevCount => prevCount - 5)
    }

    const resetbtn = () => {
        console.log("Reset button is triggered");
        setCount(0)
    }

  return (
    <div className="root"> 
        <h4> <u> Increase or Decrease Number</u> </h4>
        <h5 id="countInfo"> Count: {count}</h5>
        <br />
        <button onClick={increasebtn}> Increase +1 </button>
        <button onClick={increasebtnplusfive}> Increase +5 </button>
        <button onClick={resetbtn}> Reset </button>
        <button onClick={decreasebtn}> Decrease -1 </button>
        <button onClick={decreasebtnminusfive}> Decrease -5 </button>
    </div>
  )
}
