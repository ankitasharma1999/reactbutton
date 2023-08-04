import React from "react";
import { useState } from 'react'

const Bgcolor = () => {
    const [isRed, setState] = useState(false)

    const abc = () => {
        if (isRed) {
            setState(false);
        }
        else {
            setState(true);
        }

        }
    return (

        <div style={{ backgroundColor: isRed ? "red" : "blue" , height:"100vh"}}  >
            <button onClick={abc} style={{ background: isRed ? "green" : "yellow"}}>Hi there!</button>
      </div>

);  
};
export default Bgcolor;