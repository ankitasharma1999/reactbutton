import React from 'react';
import { useState } from 'react';
function countfunction(){
    const [count,setCount]=useState(0);
function increment(){
    setCount(count+1);
}
function decrement(){
        setCount(count-1);
    }


return(
    <div>
        <button onClick={increment}>++</button>
        <button onClick={decrement}>--</button>
    </div>
);
};
export default countfunction;