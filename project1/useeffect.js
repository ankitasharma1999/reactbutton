import React from 'react'
import { useState,useEffect } from 'react'
 function Hooks( )
 {
    const [count,setCount]= useState(0);
    useEffect(()=>{
           console.log (count);
    },[count]);

    function incre(){
        setCount(count+1);
    }
    function decre()
    {
        setCount(count-1);

    }
    return(
        <div>
            <h3>counter: {count}</h3><br />
            <button onClick={incre}>increment!!!</button>
            <button onClick={decre}>decrement!!!</button>

        </div>
    )
 }
 export default Hooks